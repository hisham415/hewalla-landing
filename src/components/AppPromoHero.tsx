import React from "react";

type StoreBadge = {
  src: string;
  alt: string;
  href: string;
};

type Props = {
  bgSrc: string;
  title: string;
  subtitle: string;
  badges: [StoreBadge, StoreBadge];
  qrTitle?: string;
  qrImageSrc: string;
  qrAlt?: string;
  maxWidthClassName?: string;
};

export default function AppPromoHero({
  bgSrc,
  title,
  subtitle,
  badges,
  qrTitle = "Scan to get Hewala",
  qrImageSrc,
  qrAlt = "Download Hewala",
}: Props) {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,.70) 0%, rgba(0,0,0,.50) 40%, rgba(0,0,0,.10) 100%), url(${bgSrc})`,
  };

  return (
    <section
      aria-labelledby="get-app-title"
      style={backgroundStyle}
      className="
        relative isolate text-white
        bg-cover bg-position-[70%_50%] md:bg-center bg-no-repeat
        h-fit
        md:h-[calc(100vh-6.4rem)]
      "
    >
      <div className="h-full flex flex-col justify-start px-4 sm:px-6 lg:px-10 py-12">
        <div>
          <h2
            id="get-app-title"
            className="
              font-extrabold uppercase tracking-tight
              text-4xl sm:text-5xl md:text-6xl
              leading-[1.05]
              break-normal whitespace-normal
              text-balance
              max-w-[22ch]
            "
          >
            {title}
          </h2>

          <p
            className="
              mt-5 text-white/85 text-base sm:text-lg md:text-xl
              break-normal whitespace-normal max-w-[46ch]
            "
          >
            {subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            {badges.map((b, i) => (
              <a
                key={i}
                href={b.href}
                aria-label={b.alt}
                className="inline-flex"
              >
                <img
                  src={b.src}
                  alt={b.alt}
                  className="h-12 w-auto rounded-md"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-end ">
          <div className="w-[250px] sm:w-[280px] py-2 rounded-xl bg-white text-neutral-900 shadow-2xl ring-1 ring-black/5">
            <div className="px-4 font-medium text-center text-xl">
              {qrTitle}
            </div>
            <div className="px-4">
              <img
                src={qrImageSrc}
                alt={qrAlt}
                className="w-full rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
