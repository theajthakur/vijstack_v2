import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import PrivacySection from './_components/PrivacySection'

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Your privacy is important to us. This policy explains how Vijstack collects, uses, and protects your information.
                    </p>
                </div>

                <Card className="border-border/50 shadow-sm">
                    <CardHeader>
                        <CardTitle>Introduction</CardTitle>
                        <CardDescription>
                            Last Updated: {new Date().toLocaleDateString()}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">

                        <PrivacySection title="1. Introduction">
                            <p>
                                Vijstack ("we", "our", "us") values your privacy and is committed to protecting your personal information.
                                This Privacy Policy explains how we collect, use, and protect data when you visit our website.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="2. Information We Collect">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium text-foreground mb-1">a) Automatically Collected Data</h3>
                                    <p>We may collect information about your visit, including your IP address, browser type, device information, pages visited, and time spent. This data is used solely for analytics and security purposes to improve our services and prevent abuse.</p>
                                </div>

                                <div>
                                    <h3 className="font-medium text-foreground mb-1">b) Contact Form Data</h3>
                                    <p>When you fill out our contact form, we collect your name, email address, message content, and optionally your business name and project type. We use this information to respond to your inquiries and provide requested services.</p>
                                </div>

                                <div>
                                    <h3 className="font-medium text-foreground mb-1">c) Newsletter Subscription</h3>
                                    <p>If you subscribe to our newsletter, we collect your email address to send you product updates, announcements, and promotions. You can unsubscribe at any time.</p>
                                </div>

                                <div>
                                    <h3 className="font-medium text-foreground mb-1">d) Community Account Data</h3>
                                    <p>When you log in via GitHub (Supabase OAuth), we may access your public profile data (username, avatar) to enable community features like comments and feedback. We do not store your passwords.</p>
                                </div>
                            </div>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="3. How We Use Your Data">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>To operate, maintain, and improve our website and services.</li>
                                <li>To respond to your comments, questions, and requests.</li>
                                <li>To send you technical notices, updates, security alerts, and support messages.</li>
                                <li>To monitor and analyze trends, usage, and activities in connection with our services.</li>
                                <li>To detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
                            </ul>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="4. Cookies & Tracking">
                            <p>
                                We may use cookies and similar tracking technologies to track activity on our service and hold certain information.
                                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="5. Third-Party Services">
                            <p>We use trusted third-party services to operate our business:</p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                                <li><strong>Supabase:</strong> For authentication and database services.</li>
                                <li><strong>GitHub:</strong> For OAuth authentication.</li>
                                <li><strong>Hosting Providers:</strong> Such as Vercel or AWS for hosting our infrastructure.</li>
                                <li><strong>Email Services:</strong> To facilitate communication and newsletters.</li>
                            </ul>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="6. Data Sharing">
                            <p className="font-medium text-foreground">
                                We do not sell, trade, or rent users’ personal data.
                            </p>
                            <p className="mt-1">
                                Data may be shared with service providers only to operate our website or when required by law.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="7. Data Security">
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                                However, no internet transmission or electronic storage is 100% secure.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="8. Your Rights">
                            <p>Depending on your location, you may have the right to:</p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                                <li>Access the personal data we hold about you.</li>
                                <li>Request correction of inaccurate data.</li>
                                <li>Request deletion of your data.</li>
                                <li>Withdraw consent for marketing communications.</li>
                            </ul>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="9. Children’s Privacy">
                            <p>
                                Vijstack does not knowingly collect personal data from children under the age of 13. If you identify that a child has provided us with personal information, please contact us.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="10. Changes to This Policy">
                            <p>
                                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="11. Contact Us">
                            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                            <div className="mt-2">
                                <a href="mailto:vijstack@gmail.com" className="text-primary hover:underline block">vijstack@gmail.com</a>
                            </div>
                        </PrivacySection>

                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
