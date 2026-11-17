import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaBand({ title = "Have a project in mind?" }: { title?: string }) {
  return (
    <section className="pb-16 pt-4 sm:pb-24 lg:pb-32">
      <div className="container-x">
        <div className="stacked mb-5 ml-5 rounded-[24px] border-2 border-ink bg-gold px-6 py-12 text-ink sm:mb-6 sm:ml-6 sm:rounded-[32px] sm:px-14 sm:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="h-section">{title}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
                Tell us what you&apos;re building. You&apos;ll get honest advice, a clear plan and a written quote, with no obligation.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="btn border-2 border-ink bg-ink text-white hover:bg-white hover:text-ink">
                Start your project
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <a href={site.whatsapp} target="_blank" rel="noopener" className="btn border-2 border-ink !px-4 text-ink hover:bg-ink hover:text-white">
                  <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
                </a>
                <a href={`mailto:${site.email}`} className="btn border-2 border-ink !px-4 text-ink hover:bg-ink hover:text-white">
                  <Mail className="h-4 w-4" aria-hidden /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
