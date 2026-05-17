import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Lizzy Smith Hairdressing',
    category: 'Beauty & Booking',
    image: '/lizzysmithweb.png',
    description:
      'A soft, elegant website for a colour specialist, designed with a mobile-first booking journey and a polished salon feel.',
  },
  {
    title: 'Shannon Wise Data Portfolio',
    category: 'Data Analyst Portfolio',
    image: '/shannonwiseanalyst.png',
    description:
      'A bold portfolio website showcasing analytics projects, technical skills, dashboard work and data storytelling.',
  },
  {
    title: 'Romagnoli Cleaning Services',
    category: 'Reviews & Local Services',
    image: '/romag.png',
    description:
      'A premium cleaning services website with customer reviews, service areas and clear WhatsApp enquiry routes.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#F3EFE8] px-5 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#557462]">
            Recent Work
          </p>

          <h2 className="font-heading text-4xl font-bold tracking-[-0.03em] text-[#1E2B24] sm:text-5xl">
            Portfolio
          </h2>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#62766B]">
            A selection of websites and digital projects designed to feel polished,
            purposeful and easy to use across every device.
          </p>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="group min-w-[82%] overflow-hidden rounded-3xl border border-[#DED9CF] bg-white/70 shadow-sm transition hover:-translate-y-1 hover:border-[#557462]/25 hover:shadow-xl sm:min-w-0"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#E8E2D8]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#557462]">
                  {project.category}
                </p>

                <h3 className="mt-3 font-heading text-2xl font-bold text-[#1E2B24]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#62766B]">
                  {project.description}
                </p>

                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[#557462] transition hover:text-[#1E2B24]"
                >
                  Discuss a similar project
                  <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}