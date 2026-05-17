import { Globe, Palette, ShoppingBag, Search, Smartphone, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Clean, professional websites built around your brand and business goals.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Layouts',
    description: 'Designed for phones first, so your site feels natural where people actually browse.',
  },
  {
    icon: Palette,
    title: 'Brand Styling',
    description: 'Colours, fonts, layout and visuals that make your business feel consistent and polished.',
  },
  {
    icon: ShoppingBag,
    title: 'Booking & Sales',
    description: 'Add booking links, enquiry forms, product sections or simple e-commerce features.',
  },
  {
    icon: Search,
    title: 'SEO Basics',
    description: 'Clear page structure and content setup to help customers find you online.',
  },
  {
    icon: BarChart3,
    title: 'Ongoing Support',
    description: 'Simple updates, improvements and maintenance once your website is live.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F8F5F0] px-5 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#557462]">
            What I Offer
          </p>

          <h2 className="font-heading text-4xl font-bold tracking-[-0.03em] text-[#1E2B24] sm:text-5xl">
            Services
          </h2>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#62766B]">
            Everything you need to create a website that looks good, works properly,
            and helps people trust your business.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-[#DED9CF] bg-white/55 p-5 shadow-sm transition hover:border-[#557462]/25 hover:shadow-lg sm:p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9E2D8] text-[#557462] transition group-hover:bg-[#557462] group-hover:text-white">
                  <Icon size={21} />
                </div>

                <h3 className="font-heading text-xl font-bold text-[#1E2B24]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#62766B]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}