import Link from 'next/link';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <div className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-background px-4 py-16 text-center sm:px-6 lg:px-8">
            {/* Abstract Background Elements */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
                <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] sm:h-[800px] sm:w-[800px]" />
                <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[80px]" />
                <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl">
                {/* Creative 404 Typography */}
                <h1 className="select-none text-[8rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-500 drop-shadow-sm sm:text-[12rem] lg:text-[14rem] animate-in fade-in zoom-in duration-700">
                    404
                </h1>

                <div className="mt-6 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        We lost this page
                    </h2>
                    <p className="mx-auto max-w-lg text-base text-muted-foreground sm:text-lg">
                        We searched high and low, but couldn’t find what you’re looking for. Let’s find a better place for you to go.
                    </p>
                </div>

                {/* Action Buttons - Stripe-like aesthetic */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/"
                        className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <HomeIcon className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center rounded-full border border-input bg-background px-8 py-3.5 text-sm font-semibold text-foreground shadow-xs transition-all duration-200 hover:bg-secondary hover:text-secondary-foreground hover:-translate-y-0.5"
                    >
                        Contact Support
                        <ArrowLeftIcon className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
