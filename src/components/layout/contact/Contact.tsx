"use client";

import React, { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { submitContactForm, ContactFormData } from '@/lib/apis/Contact';
import {
    EnvelopeIcon,
    PhoneIcon,
    ChatBubbleLeftRightIcon,
    ClockIcon,
    CurrencyDollarIcon,
    CheckBadgeIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

const PROJECT_TYPES = [
    { id: 'website', label: 'Business Website' },
    { id: 'ecommerce', label: 'Ecommerce Website' },
    { id: 'saas', label: 'SaaS / MVP Product' },
    { id: 'landing', label: 'Landing Page' },
    { id: 'other', label: 'Not Sure / Other' }
];

const TRUST_SIGNALS = [
    {
        icon: ChatBubbleLeftRightIcon,
        title: "Clear Communication",
        description: "Direct access to our team. No account managers, no jargon."
    },
    {
        icon: CurrencyDollarIcon,
        title: "Transparent Pricing",
        description: "Detailed quotes with no hidden fees or surprise charges."
    },
    {
        icon: ClockIcon,
        title: "On-Time Delivery",
        description: "We set realistic timelines and stick to them."
    },
    {
        icon: ShieldCheckIcon,
        title: "No-Obligation Chat",
        description: "Get advice on your project before committing to anything."
    }
];

export default function Contact() {
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        businessName: '',
        projectType: 'website',
        message: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        startTransition(async () => {
            const result = await submitContactForm(formData);
            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success("Request sent successfully! We'll be in touch soon.");
                setFormData({
                    name: '',
                    email: '',
                    businessName: '',
                    projectType: 'website',
                    message: '',
                    phone: ''
                });
            }
        });
    };

    return (
        <div className="w-full min-h-screen bg-background font-sans">
            {/* Background Decor */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-50" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-24 pb-16 container px-4 mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Start Your Project with Confidence
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Tell us about your business goals. We’ll help you choose the right path to digital success.
                </p>
            </section>

            <div className="container px-4 mx-auto pb-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Contact Form Section */}
                    <div className="lg:col-span-7">
                        <div className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-sm">
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone (Optional)</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="+91 XXXX323XX"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="businessName" className="text-sm font-medium text-foreground">Business / Company Name</label>
                                        <input
                                            type="text"
                                            id="businessName"
                                            name="businessName"
                                            required
                                            value={formData.businessName}
                                            onChange={handleChange}
                                            className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="My Awesome Company"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="projectType" className="text-sm font-medium text-foreground">Project Type</label>
                                    <div className="relative">
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            className="flex h-12 w-full appearance-none rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {PROJECT_TYPES.map(type => (
                                                <option key={type.id} value={type.id}>{type.label}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                                            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us a little about your goals..."
                                        className="flex min-h-[120px] w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    {isPending ? (
                                        <>
                                            <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                            Sending Request...
                                        </>
                                    ) : (
                                        "Send Request"
                                    )}
                                </button>
                                <p className="text-xs text-muted-foreground text-center">
                                    We usually reply within 24 hours. No spam, ever.
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Sidebar / Trust Signals */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Alternative Contact */}
                        <div className="rounded-3xl bg-muted/30 p-8 border border-border/50">
                            <h3 className="text-lg font-semibold mb-6">Other ways to connect</h3>
                            <div className="space-y-4">
                                <a href="mailto:vijstack@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <EnvelopeIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Email us at</p>
                                        <p className="font-semibold">vijstack@gmail.com</p>
                                    </div>
                                </a>
                                <a href="https://wa.me/919695146906" className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                                        <PhoneIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Chat on WhatsApp</p>
                                        <p className="font-semibold">+91 9695146906</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Trust Metrics */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold px-2">Why businesses trust us</h3>
                            {TRUST_SIGNALS.map((signal, idx) => (
                                <div key={idx} className="flex gap-4 px-2">
                                    <div className="flex-shrink-0 mt-1">
                                        <signal.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground">{signal.title}</h4>
                                        <p className="text-sm text-muted-foreground">{signal.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Guarantee Badge */}
                        <div className="rounded-3xl bg-gradient-to-br from-primary/5 to-transparent p-6 border border-primary/10 flex items-center gap-4">
                            <CheckBadgeIcon className="w-12 h-12 text-primary flex-shrink-0" />
                            <div>
                                <p className="font-bold text-foreground">100% Satisfaction Focus</p>
                                <p className="text-sm text-muted-foreground">We don't just deliver code. We deliver results that help you grow.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
