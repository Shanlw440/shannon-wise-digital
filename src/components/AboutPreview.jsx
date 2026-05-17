import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPreview() {
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  return (
    <section className="bg-[#F8F5F0] px-5 py-16 sm:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mx-auto max-w-6xl rounded-[2rem] border border-[#DED9CF] bg-white/55 p-6 shadow-sm sm:p-8 lg:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#557462]">
              About Shannon Wise Digital
            </p>

            <h2 className="font-heading text-4xl font-bold tracking-[-0.03em] text-[#1E2B24] sm:text-5xl">
              Websites that feel polished, personal and easy to use.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#62766B]">
              I create mobile-first websites for small businesses that want to look more professional online, build trust quickly and make it easier for customers to get in touch.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/about"
                onClick={scrollToTop}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#557462] px-6 text-sm font-semibold text-white shadow-md shadow-[#557462]/20 transition hover:bg-[#496758]"
              >
                More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                to="/reviews"
                onClick={scrollToTop}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#D8D5CB] bg-white/70 px-6 text-sm font-semibold text-[#1E2B24] transition hover:bg-white"
              >
                View Reviews
                <Star className="ml-2 h-4 w-4 text-[#557462]" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-4 rounded-3xl bg-[#F3EFE8] p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D9E2D8] text-[#557462]">
                <MapPin size={20} />
              </div>

              <div>
                <p className="font-heading text-xl font-bold text-[#1E2B24]">
                  Lincolnshire based
                </p>
                <p className="mt-1 text-sm text-[#62766B]">
                  Working with local and UK businesses.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-3xl bg-[#F3EFE8] p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D9E2D8] text-[#557462]">
                <Sparkles size={20} />
              </div>

              <div>
                <p className="font-heading text-xl font-bold text-[#1E2B24]">
                  Mobile-first design
                </p>
                <p className="mt-1 text-sm text-[#62766B]">
                  Built around how people browse now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}