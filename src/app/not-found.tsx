import Link from 'next/link';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="relative w-full max-w-2xl px-4 text-center">
                <div className="flex justify-center">
                    <Image
                        src="/illustrations/404.png"
                        alt="Page Not Found"
                        width={400}
                        height={400}
                        className="h-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]"
                        priority
                    />
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                            I lost the <span className="text-primary">Path</span>
                        </h1>
                        <p className="mx-auto max-w-md text-base text-muted-foreground sm:text-lg md:text-xl">
                            Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6">
                        <Link
                            href="/"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/25 hover:-translate-y-0.5"
                        >
                            <span className="mr-2">
                                <HomeIcon className="h-5 w-5" />
                            </span>
                            Back to Home
                        </Link>

                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center rounded-full border border-input bg-card px-8 py-3 font-medium text-foreground shadow-sm transition-all duration-300 hover:border-primary/20 hover:bg-secondary/50 hover:text-primary hover:-translate-y-0.5"
                        >
                            Contact Support
                            <ArrowLeftIcon className="ml-2 h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
