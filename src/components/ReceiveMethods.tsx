type Props = {
  /** Phone mock image from /public, e.g. "/images/receive-phone.png" */
  phoneSrc: string;
  phoneAlt?: string;
  /** Headline + subcopy */
  title?: string;
  subtitle?: string;
};

export default function ReceiveMethods({
  phoneSrc,
  phoneAlt = "Receive methods screen on mobile",
  title = "MULTIPLE WAYS TO RECEIVE MONEY",
  subtitle = "Send money directly to a bank account, digital wallet, or even as door to door cash delivery",
}: Props) {
  return (
    <section className="py-10">
      <div className="px-2">
        {/* Panel */}
        <div className="relative rounded-[28px] bg-[#cfe0ff] px-4 py-10 lg:px-10 sm:py-12">
          {/* FLEX layout */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-6">
            {/* LEFT: copy (take ~60%) */}
            <div className="md:basis-[60%] md:shrink-0">
              <h2
                className="
                  text-[#133a78]
                  font-extrabold uppercase tracking-tight
                  leading-[1.05]
                  text-center sm:text-start
                  text-[2.5rem] lg:text-[3.625rem]
                "
              >
                {title}
              </h2>

              <p
                className="
                  mt-4 text-[#133a78]/90
                  text-[clamp(14px,1.5vw,16px)]
                  break-normal whitespace-normal text-pretty
                  text-center sm:text-start
                "
              >
                {subtitle}
              </p>
            </div>

            {/* RIGHT: phone (take ~40%), pinned bottom-right on desktop */}
            <div className="md:basis-[40%] md:shrink-0 flex items-end justify-center md:justify-end">
              <img
                src={phoneSrc}
                alt={phoneAlt}
                className="
                   select-none
                  drop-shadow-[0_20px_40px_rgba(2,6,23,0.15)]
                "
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          </div>

          {/* Rounded mask for crisp corners (no visual change, just precision) */}
          <span className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/0" />
        </div>
      </div>
    </section>
  );
}
