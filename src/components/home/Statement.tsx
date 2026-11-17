import ScrollReveal from "@/components/reactbits/ScrollReveal";

export default function Statement() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container-x">
        <ScrollReveal
          effect="fade"
          baseOpacity={0.14}
          enableBlur={false}
          baseRotation={0}
          containerClassName="max-w-5xl"
          textClassName="font-display text-[clamp(1.75rem,1rem+3.2vw,3.6rem)] leading-[1.12] tracking-[-0.02em] text-ink"
          wordAnimationEnd="bottom 60%"
        >
          VijStack is a small studio that treats every website like a product: designed with care, built to load fast,
          structured to rank on Google, and looked after long after launch.
        </ScrollReveal>
      </div>
    </section>
  );
}
