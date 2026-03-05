'use server';

import prisma from "../prisma";
import { resend } from "../resend";
import { EmailNewsletterSubscribed, EmailToVijStackTeam } from "../email_templates/templates";

export const subscribeToNewsletter = async (email: string) => {
    try {
        const existingUser = await prisma.newsletter.findUnique({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return { error: "You are already subscribed to our newsletter" };
        }

        const user = await prisma.newsletter.create({
            data: {
                email: email,
            },
        });

        // Robust email delivery: ensure both are attempted
        // We use Promise.allSettled to ensure both run and don't block each other's errors
        const emailResults = await Promise.allSettled([
            // 1. To client
            resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL!,
                to: email,
                subject: "Welcome to VijStack",
                html: EmailNewsletterSubscribed(email),
            }),
            // 2. To VijStack Team
            resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL!,
                to: process.env.RESEND_EMAIL_TO || "vijstack@gmail.com",
                subject: `New Newsletter Subscriber: ${email}`,
                html: EmailToVijStackTeam(`Someone just subscribed to the newsletter: ${email}`, email),
            })
        ]);

        // Log any failures for debugging
        emailResults.forEach((result, index) => {
            if (result.status === 'rejected') {
                console.error(`Newsletter Email ${index + 1} failed:`, result.reason);
            }
        });

        return { user };
    } catch (error) {
        console.error("Error creating user:", error);
        return { error: "Failed to create user" };
    }
};