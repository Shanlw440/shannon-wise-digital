import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: MapPin,
    title: 'Lincolnshire based',
    text: 'Working with local and UK businesses.',
  },
  {
    icon: Heart,
    title: 'Personal approach',
    text: 'Friendly, clear and jargon-free support.',
  },
  {
    icon: Sparkles,
    title: 'Polished design',
    text: 'Clean websites that feel professional.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1E2B24]">
      <Navbar />

      <main className="pt-24">
        <section className="px-5 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/"
              className="mb-8 inline-flex items-center text-sm font-semibold text-[#557462] hover:text-[#1E2B24]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#557462]">
                  About Me
                </p>

                <h1 className="font-heading text-5xl font-bold tracking-[-0.04em] text-[#1E2B24] sm:text-6xl">
                  Hi, I'm Shannon
                </h1>

                <div className="mt-6 space-y-4 text-base leading-8 text-[#62766B]">
                  <p>
                    I create modern websites for small businesses that want to look more professional online and make it easier for customers to get in touch.
                  </p>

                  <p>
                    My focus is on mobile-first layouts, clean design, clear messaging and websites that feel easy to use from the first tap.
                  </p>

                  <p>
                    Based in Lincolnshire, I work with local and UK businesses who want a polished online presence without a complicated process.
                  </p>

                  <p>
                    I like websites that feel thoughtful, simple and useful. The goal is not just to make something look nice, but to create a site that helps your business feel trustworthy and easier to choose.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
                className="rounded-[2rem] border border-[#DED9CF] bg-white/55 p-6 shadow-sm sm:p-8"
              >
                <div className="rounded-[1.5rem] bg-[#F3EFE8] p-7 text-center">
                  <img
                    src="/logo.png"
                    alt="Shannon Wise Digital"
                    className="mx-auto h-24 w-auto"
                  />
                </div>

                <div className="mt-5 grid gap-3">
                  {highlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-4 rounded-3xl bg-[#F3EFE8] p-5"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D9E2D8] text-[#557462]">
                          <Icon size={20} />
                        </div>

                        <div>
                          <p className="font-heading text-xl font-bold text-[#1E2B24]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm text-[#62766B]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}