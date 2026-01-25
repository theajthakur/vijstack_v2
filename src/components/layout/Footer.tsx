import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background/50 backdrop-blur-xl pt-16 pb-8">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="md:col-span-1 space-y-4">
                        <div className='flex items-center gap-2'>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/logo.png" alt="Logo" width={50} height={50} />
                            </Link>
                            <h1 className="text-2xl font-bold bg-clip-text text-foreground">Vijstack</h1>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Building digital experiences that matter. Modern, minimal, and user-centric solutions for your business.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Services</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services/sass" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    SASS Platform
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/ecommerce" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    E-commerce
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/landing-pages" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Landing Pages
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/consulting" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Consulting
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter or Contact Info (Optional 4th column) */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Stay Updated</h4>
                        <p className="text-muted-foreground text-sm">
                            Subscribe to our newsletter for the latest updates and tech insights.
                        </p>
                        <form className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 min-w-0 px-3 py-2 text-sm border rounded-md border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                            />
                            <button type='submit' className="px-3 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Vijstack Agency. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
