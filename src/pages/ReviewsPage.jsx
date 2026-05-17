import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1E2B24]">
      <Navbar />

      <main className="pt-24">
        <section className="px-5 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/"
              className="mb-8 inline-flex items-center text-sm font-semibold text-[#557462] hover:text-[#1E2B24]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>

            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#557462]">
                Client Reviews
              </p>

              <h1 className="font-heading text-5xl font-bold tracking-[-0.04em] text-[#1E2B24] sm:text-6xl">
                Reviews
              </h1>

              <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[#62766B]">
                A few kind words from clients I’ve worked with.
              </p>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}