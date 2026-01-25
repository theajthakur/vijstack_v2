'use server';

import prisma from "../prisma";

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

        return { user };
    } catch (error) {
        console.error("Error creating user:", error);
        return { error: "Failed to create user" };
    }
};