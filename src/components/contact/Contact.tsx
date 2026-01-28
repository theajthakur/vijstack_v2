"use client"
import React, { useTransition } from 'react';
import { toast } from 'sonner';
import { submitContactForm } from '@/lib/apis/Contact';
import {
    Mail,
    Phone,
    MessageSquare,
    Clock,
    DollarSign,
    CheckCircle,
    ShieldCheck
} from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useQueryState } from "nuqs"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const PROJECT_TYPES = [
    { id: 'website', label: 'Business Website' },
    { id: 'ecommerce', label: 'Ecommerce Website' },
    { id: 'saas', label: 'SaaS / MVP Product' },
    { id: 'landing', label: 'Landing Page' },
    { id: 'other', label: 'Not Sure / Other' }
];

const TRUST_SIGNALS = [
    {
        icon: MessageSquare,
        title: "Clear Communication",
        description: "Direct access to our team. No account managers, no jargon."
    },
    {
        icon: DollarSign,
        title: "Transparent Pricing",
        description: "Detailed quotes with no hidden fees or surprise charges."
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description: "We set realistic timelines and stick to them."
    },
    {
        icon: ShieldCheck,
        title: "No-Obligation Chat",
        description: "Get advice on your project before committing to anything."
    }
];

const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
        .string()
        .min(10, "Phone number must be minimum 10 digits long"),
    businessName: z.string().optional(),
    projectType: z.string().min(1, "Please select a project type"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function Contact() {
    const [isPending, startTransition] = useTransition();
    const [queryService] = useQueryState("service")
    const [queryPlan] = useQueryState("plan")

    const refinedPlan = queryPlan ? ["starter", "growth", "enterprise"].includes(queryPlan.toLowerCase()) ? queryPlan.toLowerCase() : "starter" : "starter"
    const messageTemplate = `I’m interested in your ${queryService} service under the ${refinedPlan} plan.

My requirement:
- Service: ${queryService}
- Plan: ${refinedPlan}

Please share details about:
- What’s included in the ${refinedPlan} plan
- Pricing and timelines
- Next steps to proceed

Thank you.
`;

    const defaultValues: ContactFormValues = {
        name: '',
        email: '',
        businessName: '',
        projectType: PROJECT_TYPES.find(type => type.id === queryService)?.id || 'website',
        message: (refinedPlan && queryService && PROJECT_TYPES.find(type => type.id === queryService)) ? messageTemplate : "",
        phone: ''
    };

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues,
    })

    const { handleSubmit, reset } = form

    const onSubmit = (data: ContactFormValues) => {
        startTransition(async () => {
            const result = await submitContactForm(data);
            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success("Request sent successfully! We'll be in touch soon.");
                reset();
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
                            <Form {...form}>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Full Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="John Doe" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email Address</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="john@example.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Phone</FormLabel>
                                                    <FormControl>
                                                        <Input type="tel" placeholder="+91 XXXX323XX" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="businessName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Business / Company Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="My Awesome Company" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="projectType"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Project Type</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select type" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {PROJECT_TYPES.map(type => (
                                                            <SelectItem key={type.id} value={type.id}>
                                                                {type.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Tell us a little about your goals..."
                                                        className="resize-y min-h-[120px]"
                                                        rows={8}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        disabled={isPending}
                                        size="lg"
                                        className="w-full"
                                    >
                                        {isPending ? (
                                            <>
                                                <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                Sending Request...
                                            </>
                                        ) : (
                                            "Send Request"
                                        )}
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">
                                        We usually reply within 24 hours. No spam, ever.
                                    </p>
                                </form>
                            </Form>
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
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Email us at</p>
                                        <p className="font-semibold">vijstack@gmail.com</p>
                                    </div>
                                </a>
                                <a href="https://wa.me/919695146906" className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                                        <Phone className="w-5 h-5" />
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
                                    <div className="shrink-0 mt-1">
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
                        <div className="rounded-3xl bg-linear-gradient-to-br from-primary/5 to-transparent p-6 border border-primary/10 flex items-center gap-4">
                            <CheckCircle className="w-12 h-12 text-primary shrink-0" />
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
