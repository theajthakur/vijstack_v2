'use server';

import prisma from "../prisma";
import { resend } from "../resend";
import { EmailToClient, EmailToVijStackTeam } from "../email_templates/templates";

export type ContactFormData = {
    name: string;
    email: string;
    phone: string;
    businessName?: string;
    projectType: string;
    message: string;
};

export const submitContactForm = async (data: ContactFormData) => {
    try {
        await prisma.quote.create({ data });

        // Robust email delivery: ensure both are attempted
        const teamMessage = `
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            Business: ${data.businessName || 'N/A'}
            Project: ${data.projectType}
            
            Message:
            ${data.message}
        `;

        const emailResults = await Promise.allSettled([
            // 1. To client (confirmation)
            resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL!,
                to: data.email,
                subject: "We received your message - VijStack",
                html: EmailToClient(data.email, data.name),
            }),
            // 2. To VijStack Team (inquiry details)
            resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL!,
                to: process.env.RESEND_EMAIL_TO || "vijstack@gmail.com",
                subject: `New Project Inquiry: ${data.projectType} from ${data.name}`,
                html: EmailToVijStackTeam(teamMessage, data.email),
            })
        ]);

        // Log any failures for debugging
        emailResults.forEach((result, index) => {
            if (result.status === 'rejected') {
                console.error(`Contact Email ${index + 1} failed:`, result.reason);
            }
        });

        return { success: true };
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return { error: "Failed to submit request. Please try again." };
    }
};
