import AppPromoHero from "./components/AppPromoHero";
import FooterLegal from "./components/FooterLegal";
import GlobalMovement from "./components/GlobalMovement";
import HeroTransfer from "./components/HeroTransfer";
import ReceiveMethods from "./components/ReceiveMethods";
import StickyHeader from "./components/StickyHeader";

export default function App() {
  return (
    <>
      <StickyHeader
        logoSrc="/Hewala.svg"
        brand="Hewala"
        loginHref="/auth/login"
        signupHref="/auth/signup"
      />

      <main className="bg-white min-h-dvh overflow-x-clip">
        <div className="mx-4 sm:mx-10">
          <HeroTransfer
            title="SENDING MONEY IS NOW EASIER THAN EVER."
            subtitle="Transfer money globally from any European country to almost anywhere in the world. Fast, secure, and reliable money transfers at your fingertips."
            onPrimaryHref="/signup"
            onSecondaryHref="/transfer"
            primaryLabel="Create an account"
            secondaryLabel="Send money now"
            phoneSrc="/mobile.png"
            phoneAlt="Hewala transfer screen"
            floaters={[
              {
                // Left card (send/receive)
                src: "/Currency-check2.svg",
                alt: "You will send exactly / Recipient gets",
                // MOBILE: left-top above phone
                mobile: "left-[6%] top-[8%] w-[58vw] rotate-[6deg]",
                // DESKTOP: left of phone, near top
                desktop: "left-[4%] top-[6%] w-[360px] rotate-[-6deg]",
              },
              {
                // Right ticket (paying / arrives)
                src: "/Currency-check.svg",
                alt: "Paying with • Arrives",
                // MOBILE: bottom-left under phone
                mobile: "left-[3%] bottom-[4%] w-[52vw] rotate-[-8deg]",
                // DESKTOP: right-bottom of phone
                desktop: "right-[8%] bottom-[8%] w-[340px] rotate-[8deg]",
              },
            ]}
          />
        </div>

        <AppPromoHero
          bgSrc="/promo.jpg"
          title="GET THE APP FOR MANAGING MONEY EVERYWHERE"
          subtitle="Choose how much you want to send and select your recipient's country. See the exact amount they'll receive."
          badges={[
            {
              src: "/Google-Play.svg",
              alt: "Get it on Google Play",
              href: "#",
            },
            {
              src: "/App-Store.svg",
              alt: "Download on the App Store",
              href: "#",
            },
          ]}
          qrImageSrc="/QrCode.png"
        />
        <GlobalMovement
          artSrc="/countries-group.svg"
          title="REDEFINING GLOBAL MONEY MOVEMENT."
          subtitle="Move and manage your money anywhere in the world, with lower fees, greater ease, and faster speed."
        />
        <ReceiveMethods phoneSrc="/Home-Screen.svg" />
        <FooterLegal
          logoSrc="/Hewalagrey.svg"
          blurb="European Economic Area (EEA) Services: The Investors LTD's payment services in the European Economic Area (EEA) territory are provided through a white-label partnership with Belmoney S.A., a payment institution licensed and under supervision of the National Bank of Belgium, registration no. 0540.745.997, with passport rights to operate in all EEA countries in accordance with PSD2 (Directive (EU) 2015/2366). All payments in the EEA are powered and processed by Belmoney in accordance with Belgian and European law."
          privacyHref="/privacy"
          legalHref="/legal"
          brand="Hewala"
        />
      </main>
    </>
  );
}
