import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1E2B24]">
      <Navbar />

      <main className="pt-24">
        <section className="px-5 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/"
              className="mb-8 inline-flex items-center text-sm font-semibold text-[#557462] hover:text-[#1E2B24]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>

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

              <div className="mt-6 space-y-5 text-base leading-8 text-[#62766B]">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}