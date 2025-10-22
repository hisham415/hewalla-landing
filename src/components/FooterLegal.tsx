type Props = {
  /** Grey brandmark from /public (e.g. "/hewala-logo-grey.svg") */
  logoSrc: string;
  logoAlt?: string;

  /** Regulatory heading + paragraph */
  heading?: string;
  blurb: string;

  /** Bottom-left links */
  privacyHref?: string;
  legalHref?: string;

  /** Brand + year on the right */
  brand?: string;
  year?: number;
};

export default function FooterLegal({
  logoSrc,
  logoAlt = "Hewala",
  heading = "Regulatory Information",
  blurb,
  privacyHref = "#",
  legalHref = "#",
  brand = "Hewala",
  year = new Date().getFullYear(),
}: Props) {
  return (
    <footer className="bg-neutral-100 text-neutral-800 w-full px-4 sm:px-10">
      {/* Outer wrapper (no mx-auto / max-w) */}
      <div className="px-4 sm:px-6">
        {/* Inner container width without max-w: center using flex */}
        <div className="flex justify-center">
          <div className=" py-10 sm:py-12">
            {/* Heading + blurb */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center gap-2 text-[20px] sm:text-[22px] font-semibold">
                {/* Info icon (inline SVG for crispness) */}
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-600"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    className="fill-none stroke-current"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="7.25" r="1.15" className="fill-current" />
                  <path d="M11.1 10.5h1.8v7h-1.8z" className="fill-current" />
                </svg>
                <h2>{heading}</h2>
              </div>

              <p
                className="
                  mt-4 sm:mt-5
                  text-[15px] sm:text-[16px] leading-relaxed text-neutral-700
                "
              >
                {blurb}
              </p>
            </div>

            {/* Divider */}
            <div className="mt-8 sm:mt-10 h-px bg-neutral-200" />

            {/* Logo (grey) */}
            <div className="flex justify-center">
              <img
                src={logoSrc}
                alt={logoAlt}
                className="mt-10 sm:mt-12 h-[42px] sm:h-[48px] opacity-70 select-none"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>

            {/* Bottom row */}
            <div
              className="
                mt-10 sm:mt-12
                flex flex-col sm:flex-row items-start sm:items-center justify-between
                gap-4 text-[15px] text-neutral-700
              "
            >
              <nav className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <a
                  href={privacyHref}
                  className="underline underline-offset-2 hover:text-neutral-900"
                >
                  Privacy policy
                </a>
                <span aria-hidden>·</span>
                <a
                  href={legalHref}
                  className="underline underline-offset-2 hover:text-neutral-900"
                >
                  Legal documents
                </a>
              </nav>

              <div className="text-neutral-600">
                © {brand}, {year}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
