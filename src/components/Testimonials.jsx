import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Lizzy Smith',
    business: 'Lizzy Smith Hairdressing',
    text: 'Shannon completely transformed our online presence. The website feels clean, professional and easy for customers to use.',
  },
  {
    name: 'Osana',
    business: 'Brasilatte',
    text: 'Professional, creative and really easy to work with. The site looks great on mobile and has made us look much more polished.',
  },
  {
    name: 'Sirelene',
    business: 'Romagnoli Cleaning Services',
    text: 'From the first chat to launch, everything was clear and simple. The final website looks beautiful and fits our brand perfectly.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F3EFE8] px-5 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#557462]">
            Kind Words
          </p>

          <h2 className="font-heading text-4xl font-bold tracking-[-0.03em] text-[#1E2B24] sm:text-5xl">
            What Clients Say
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative min-w-[82%] rounded-3xl border border-[#DED9CF] bg-white/70 p-6 shadow-sm sm:min-w-0"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-[#D9E2D8]" />

              <div className="mb-5 flex gap-1 text-[#557462]">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="pr-6 text-sm italic leading-7 text-[#1E2B24]/80">
                "{testimonial.text}"
              </p>

              <div className="mt-6">
                <p className="font-heading text-lg font-bold text-[#1E2B24]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-[#62766B]">
                  {testimonial.business}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}