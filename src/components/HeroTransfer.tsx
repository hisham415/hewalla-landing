type Floater = {
  src: string; // e.g. "/Currency-check.svg"
  alt?: string; // leave empty if decorative
  mobile: string; // Tailwind classes for mobile position/size/rotation
  desktop: string; // Tailwind classes for ≥lg position/size/rotation
  className?: string; // optional extras (z-index, etc.)
};

type Props = {
  title: string;
  subtitle: string;

  onPrimaryHref?: string;
  onSecondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;

  phoneSrc: string;
  phoneAlt?: string;

  /** EXACTLY 2 floaters for this version */
  floaters: [Floater, Floater];

  /** width of content container */
  maxWidthClassName?: string;
};

export default function HeroTransfer({
  title,
  subtitle,
  onPrimaryHref = "#",
  onSecondaryHref = "#",
  primaryLabel = "Create an account",
  secondaryLabel = "Send money now",
  phoneSrc,
  phoneAlt = "App preview",
  floaters,
  maxWidthClassName = "max-w-[1200px]",
}: Props) {
  return (
    <section aria-labelledby="hero-title" className="relative bg-white">
      <div className={`mx-auto ${maxWidthClassName} px-4 sm:px-6 lg:px-10`}>
        {/* Copy */}
        <div className="pt-10 sm:pt-14 text-center">
          <h1
            id="hero-title"
            className="text-[#003479] font-black tracking-tight
                        text-[2.5rem] lg:text-[3.625rem]
                        leading-tight sm:text-[58px]"
          >
            {title}
          </h1>

          <p className="mt-4 text-primary-digital-black text-base font-medium sm:text-lg md:text-xl lg:text-xl">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href={onPrimaryHref}
              className="inline-flex items-center justify-center rounded-full px-6 sm:px-8 h-12 text-base font-semibold bg-[#377DFF] text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#377DFF] transition"
            >
              {primaryLabel}
            </a>
            <a
              href={onSecondaryHref}
              className="inline-flex items-center justify-center rounded-full px-6 sm:px-8 h-12 text-base font-semibold border border-[#377DFF] text-[#377DFF] hover:bg-[#377DFF]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#377DFF] transition"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>

        {/* Visual stage (absolute positioning area) */}
        <div className="relative mt-10 sm:mt-14">
          {/* Fixed responsive height so art never jumps while loading */}
          <div className="relative flex items-center justify-center">
            {/* Phone */}
            <img
              src={phoneSrc}
              alt={phoneAlt}
              className="
              "
              draggable={false}
              loading="eager"
              decoding="async"
            />

            {/* Floater 1 */}
            <FloaterImg floater={floaters[0]} />

            {/* Floater 2 */}
            <FloaterImg floater={floaters[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Renders one floater with separate mobile/desktop classes */
function FloaterImg({ floater }: { floater: Floater }) {
  const decorative = !floater.alt || floater.alt.trim().length === 0;
  return (
    <img
      src={floater.src}
      alt={decorative ? "" : floater.alt}
      aria-hidden={decorative}
      className={`
        absolute pointer-events-none select-none
        ${floater.mobile}
        lg:${floater.desktop}
        ${floater.className ?? ""}
        drop-shadow-[0_18px_32px_rgba(2,6,23,0.12)]
        will-change-transform
      `}
      draggable={false}
      loading="eager"
      sizes="(min-width:1024px) 22vw, (min-width:640px) 40vw, 56vw"
      decoding="async"
    />
  );
}
