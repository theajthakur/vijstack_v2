'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
];

export default function Navbar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-6 z-50 mx-auto w-full bg-black backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden">
            <div className="mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <img src="/logo.png" alt="Logo" width={45} height={45} className="object-contain invert" />
                        <span className="font-bold text-xl tracking-tight text-white hidden sm:block">Vijstack</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn("text-sm font-semibold text-slate-300 hover:text-white transition-all relative group", pathname === link.href && "text-white")}
                            >
                                {link.name}
                                <span className={cn("absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full", pathname === link.href && "w-full")} />
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="px-5 py-2.5 text-sm font-bold text-black bg-white rounded-xl hover:bg-slate-200 transition-all shadow-md active:scale-95"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-2xl">
                    <div className="px-6 py-6 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-lg font-bold text-white hover:text-slate-300 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-6 border-t border-white/10 flex flex-col gap-5">
                            <div className="relative">
                                <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Search projects or services..."
                                    className="w-full pl-12 pr-4 py-3 text-sm border border-white/10 rounded-xl bg-white/5 text-white outline-none"
                                />
                            </div>
                            <Link
                                href="/contact"
                                className="w-full px-4 py-4 text-center text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Let's Talk
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
