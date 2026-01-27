import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: "Careers at VijStack - Join Our Web Development Team",
    description: "Explore career opportunities at VijStack. Join our team of expert developers and designers building the future of the web in Greater Noida.",
    alternates: {
        canonical: "https://vijstack.com/careers",
    }
};

export default function CareersPage() {
    const careersSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Careers at VijStack",
        "url": "https://vijstack.com/careers",
        "description": "Current job openings at VijStack."
    };

    return (
        <>
            <JsonLd data={careersSchema} />
            <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 pb-12 sm:px-6 lg:px-8">

                <div className="relative w-full max-w-2xl px-4 text-center">
                    {/* Image Container with subtle float animation */}
                    <div className="flex justify-center">
                        <div>
                            <Image
                                src="/illustrations/full_hiring.png"
                                alt="No Vacancies"
                                width={400}
                                height={400}
                                className="h-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]"
                                priority
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="space-y-3">
                            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                                Our team is currently <span className="text-primary">at full capacity</span>
                            </h1>
                            <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed">
                                We're thrilled by the interest in VijStack! While we don't have open positions right now, we're always growing. Check back soon for future opportunities.
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center pt-6">
                            <Link
                                href="/"
                                className="group inline-flex items-center justify-center rounded-full border border-input bg-card px-8 py-3 font-medium text-foreground shadow-sm transition-all duration-300 hover:border-primary/20 hover:bg-secondary/50 hover:text-primary hover:-translate-y-0.5"
                            >
                                <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
