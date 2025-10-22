import React from "react";

type Props = {
  logoSrc: string;
  brand: string;
  loginHref?: string;
  signupHref?: string;
  maxWidthClassName?: string;
};

export default function StickyHeader({
  logoSrc,
  brand,
  loginHref = "/login",
  signupHref = "/signup",
}: Props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60
        border-b border-gray-200
      "
      role="banner"
    >
      <nav aria-label="Main" className={`px-4 sm:px-6 lg:px-8 py-8`}>
        <div className="h-full flex items-center justify-between gap-4 relative">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logoSrc}
              alt={brand}
              className="h-8 w-auto"
              loading="eager"
              decoding="async"
            />
            <span className="sr-only">{brand}</span>
          </a>

          {/* Desktop actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={loginHref}
              className="
                inline-flex items-center justify-center
                rounded-full px-5 h-10 text-sm font-medium
                bg-[#377DFF] text-white shadow-sm
                hover:opacity-95
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#377DFF]
                transition
              "
            >
              Log in
            </a>
            <a
              href={signupHref}
              className="
                inline-flex items-center justify-center
                rounded-full px-5 h-10 text-sm font-medium
                border border-[#377DFF] text-[#377DFF]
                hover:bg-[#377DFF]/5
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#377DFF]
                transition
              "
            >
              Sign up
            </a>
          </div>

          {/* Mobile trigger (the + that turns into two parallel overlapping lines) */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-auth-menu"
              className="
                relative inline-flex items-center justify-center
                h-10 w-10 rounded-full
                text-[#377DFF]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#377DFF]
                transition
              "
            >
              {/* Built from two bars.
                 - Closed: bar1 = horizontal (center), bar2 = vertical (center) -> "+"
                 - Open:   bar1 = horizontal shifted up, bar2 = horizontal shifted down -> "="
               */}
              <span aria-hidden className="relative block h-6 w-6">
                {/* Bar 1 */}
                <span
                  className={`
                    absolute left-1/2 top-1/2 -translate-x-1/2 rounded bg-current
                    transition-all duration-200 ease-out
                    ${
                      open
                        ? "h-[2px] w-6 -translate-y-[6px]" /* top line */
                        : "h-[2px] w-6 -translate-y-1/2"
                    }         /* centered horizontal */
                  `}
                />
                {/* Bar 2 */}
                <span
                  className={`
                    absolute left-1/2 top-1/2 -translate-x-1/2 rounded bg-current
                    transition-all duration-200 ease-out
                    ${
                      open
                        ? "h-[2px] w-6 translate-y-[6px]" /* bottom line */
                        : "h-6 w-[2px] -translate-y-1/2"
                    }         /* centered vertical */
                  `}
                />
              </span>
            </button>
          </div>

          {/* Mobile dropdown panel */}
          <div
            id="mobile-auth-menu"
            className={`
              sm:hidden absolute right-4 top-[calc(100%+8px)]
              w-48 rounded-xl border border-gray-200 bg-white shadow-lg
              overflow-hidden
              transition
              ${
                open
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }
            `}
          >
            <div className="p-2 grid gap-2">
              <a
                href={loginHref}
                className="
                  inline-flex items-center justify-center
                  rounded-lg px-4 h-10 text-sm font-medium
                  bg-[#377DFF] text-white
                  hover:opacity-95 transition
                "
                onClick={() => setOpen(false)}
              >
                Log in
              </a>
              <a
                href={signupHref}
                className="
                  inline-flex items-center justify-center
                  rounded-lg px-4 h-10 text-sm font-medium
                  border border-[#377DFF] text-[#377DFF]
                  hover:bg-[#377DFF]/5 transition
                "
                onClick={() => setOpen(false)}
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Optional click-catcher backdrop on mobile */}
      {open && (
        <button
          aria-hidden
          tabIndex={-1}
          className="sm:hidden fixed inset-0 z-40 bg-black/0"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
