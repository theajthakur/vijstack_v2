'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
];

export default function Navbar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className={cn(
            "sticky top-6 z-50 mx-auto transition-all duration-500",
            "w-[95%] bg-primary-400/90 backdrop-blur-xl border border-white/10 shadow-lg shadow-primary/5",
            isMobileMenuOpen ? "overflow-visible rounded-2xl" : "overflow-hidden rounded-full",
            scrolled ? "max-w-4xl" : "max-w-screen-2xl"
        )}>
            <div className="mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <img src="/logo.png" alt="Logo" width={45} height={45} className="object-contain" />
                        {!scrolled && <span className="font-bold text-xl tracking-tight text-neutral-900 hidden sm:block">Vijstack</span>}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn("text-base font-semibold text-neutral-800 hover:text-neutral-900 transition-all relative group", pathname === link.href && "text-neutral-900")}
                            >
                                {link.name}
                                <span className={cn("absolute -bottom-1 left-0 w-0 h-[3px] rounded-full bg-primary-900 transition-all group-hover:w-full", pathname === link.href && "w-full")} />
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            asChild
                            className="px-5 py-2.5 text-sm font-bold text-neutral-900 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-all shadow-md active:neutral-300"
                        >
                            <Link href="/contact">
                                Let's Talk
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden p-2 text-neutral-800 hover:text-neutral-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-black/5 bg-primary-400/95 backdrop-blur-2xl rounded-2xl">
                    <div className="px-6 py-6 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-lg font-bold text-neutral-900 hover:text-neutral-800 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-6 border-t border-black/5 flex flex-col gap-5">
                            <Button
                                asChild
                                className="px-5 py-2.5 text-sm font-bold text-neutral-900 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-all shadow-md active:neutral-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Link href="/contact">
                                    Let's Talk
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
