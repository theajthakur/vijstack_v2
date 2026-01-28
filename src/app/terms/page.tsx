import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import PrivacySection from '../privacy/_components/PrivacySection'

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                        Terms & Conditions
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Please read these terms carefully before using our website.
                    </p>
                </div>

                <div className="w-full relative mb-8 flex justify-center">
                    <Image
                        src="/illustrations/terms.png"
                        alt="Terms Illustration"
                        width={400}
                        height={400}
                    />
                </div>

                <Card className="border-border/50 shadow-sm">
                    <CardHeader>
                        <CardTitle>Terms of Service</CardTitle>
                        <CardDescription>
                            Last Updated: {new Date().toLocaleDateString()}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">

                        <PrivacySection title="1. Introduction">
                            <p>
                                By accessing this website, you agree to these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="2. Use of Website">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>You must not use this website for any illegal activity.</li>
                                <li>No hacking, scraping, or abusing the website infrastructure.</li>
                                <li>No posting harmful, abusive, or inappropriate content in the community sections.</li>
                            </ul>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="3. User Accounts">
                            <p>
                                Since our community features utilize GitHub login:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                                <li>You are responsible for all activity that occurs under your account.</li>
                                <li>We reserve the right to remove comments or ban users who violate our community guidelines or abuse the platform.</li>
                            </ul>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="4. Intellectual Property">
                            <p>
                                All content, logos, designs, and code on this website belong to Vijstack.
                                Users cannot copy, redistribute, or reproduce any part of this website without our prior written permission.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="5. No Payments / No Contracts Disclaimer">
                            <p>
                                Vijstack does not process payments through this website. Any service agreements, projects, or contracts are handled separately via direct communication and formal agreements.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="6. Limitation of Liability">
                            <p>
                                Vijstack is not liable for any website downtime, bugs, or data loss. You use this website at your own risk.
                                In no event shall Vijstack be liable for any indirect, incidental, special, or consequential damages.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="7. External Links">
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites or services.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="8. Termination">
                            <p>
                                We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="9. Governing Law">
                            <p>
                                These terms shall be governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts in India.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="10. Changes to Terms">
                            <p>
                                We reserve the right to modify or replace these Terms at any time. We will try to provide notice prior to any new terms taking effect.
                            </p>
                        </PrivacySection>

                        <Separator />

                        <PrivacySection title="11. Contact Us">
                            <p>If you have any questions about these Terms, please contact us at:</p>
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
