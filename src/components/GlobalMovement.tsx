type Props = {
  /** Single composite image (H + flags) from /public */
  artSrc: string; // e.g. "/art/h-flags.png"
  artAlt?: string; // accessible alt (or "" if decorative)

  /** Heading and body */
  title: string; // e.g. "REDEFINING GLOBAL MONEY MOVEMENT."
  subtitle: string; // supporting line

  /** Optional container width */
  maxWidthClassName?: string; // default 1100px
};

export default function GlobalMovement({
  artSrc,
  artAlt = "Hewala logo surrounded by country flags",
  title,
  subtitle,
}: Props) {
  return (
    <section
      aria-labelledby="global-movement-title"
      className="relative bg-white"
    >
      <div className={`px-4 sm:px-6 lg:px-10 py-10 `}>
        {/* Artwork */}
        <figure className="flex justify-center">
          <img
            src={artSrc}
            alt={artAlt}
            className="
            "
            loading="lazy"
            decoding="async"
            sizes="(min-width:1024px) 36vw, (min-width:640px) 56vw, 68vw"
            draggable={false}
          />
        </figure>

        {/* Headline */}
        <h2
          id="global-movement-title"
          className="
            mt-10 text-center
            font-black uppercase tracking-tight
            text-[#003479]
            leading-[1.05]
            text-[2.5rem] lg:text-[3.625rem]
          "
        >
          {title}
        </h2>

        {/* Supporting copy */}
        <p className="mt-4 text-primary-digital-black text-base font-medium sm:text-lg md:text-xl lg:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
