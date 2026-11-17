import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="group inline-flex items-center gap-2.5" aria-label="VijStack home">
      <Image
        src="/logo-256.png"
        alt=""
        width={34}
        height={34}
        priority
        className={`h-[34px] w-[34px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${light ? "invert" : ""}`}
      />
      <span className={`font-display text-[1.45rem] font-semibold tracking-[-0.02em] ${light ? "text-white" : "text-ink"}`}>
        VijStack
      </span>
    </Link>
  );
}
