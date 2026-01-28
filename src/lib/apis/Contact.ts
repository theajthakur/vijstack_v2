'use server';

import { toast } from "sonner";
import prisma from "../prisma";

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
        return { success: true };
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return { error: "Failed to submit request. Please try again." };
    }
};
