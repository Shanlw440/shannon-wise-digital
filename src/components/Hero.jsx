import { Sparkles, ArrowDown } from 'lucide-react';

const HERO_BG =
  'https://media.base44.com/images/public/6a0992a950861507827b7a68/198e5b8ca_generated_4375592a.png';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-12 pt-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5F0]/75 via-[#F8F5F0]/55 to-[#F8F5F0]" />
      </div>

      {/* Soft blur shapes */}
      <div className="absolute right-[-90px] top-32 h-56 w-56 rounded-full bg-[#D9E2D8]/40 blur-3xl" />
      <div className="absolute bottom-16 left-[-100px] h-64 w-64 rounded-full bg-[#EDE6DA]/70 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D8D5CB] bg-[#D9E2D8]/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#557462] shadow-sm">
          <Sparkles size={14} />
          Based in Lincolnshire
        </div>

        <h1 className="font-heading text-[39px] font-bold leading-[1.02] tracking-[-0.04em] text-[#1E2B24] sm:text-6xl lg:text-7xl">
          Modern Websites.
          <span className="block italic text-[#557462]">
            Stronger Business.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-[17px] leading-8 text-[#62766B]">
          Beautifully crafted websites that help small businesses grow
          online. From stunning designs to seamless functionality. Your digital
          presence, perfected.
        </p>

        <div className="mx-auto mt-9 flex max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
          <button
            onClick={scrollToContact}
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#557462] px-8 text-base font-semibold text-white shadow-lg shadow-[#557462]/25 transition hover:bg-[#496758]"
          >
            Start Your Project
          </button>

          <button
            onClick={scrollToPortfolio}
            className="inline-flex h-14 items-center justify-center rounded-full border border-[#D8D5CB] bg-white/60 px-8 text-base font-semibold text-[#1E2B24] transition hover:bg-white"
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Bouncing scroll arrow */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 animate-bounce text-[#7C9287]"
        aria-label="Scroll to services"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}