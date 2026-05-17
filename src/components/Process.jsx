import { motion } from 'framer-motion';
import { MessageCircle, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Discovery',
    description:
      'We chat about your business, goals, and vision. I learn what makes you unique so I can bring it to life online.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    description:
      'I create mockups and concepts for your approval, refining until every detail feels right.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Build',
    description:
      'Your website is developed with clean code, fast performance, and responsive design across all devices.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch',
    description:
      'We go live! I handle everything from domain setup to final testing, and provide ongoing support.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#F8F5F0] px-5 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#557462]">
            How It Works
          </p>

          <h2 className="font-heading text-4xl font-bold tracking-[-0.03em] text-[#1E2B24] sm:text-5xl">
            My Process
          </h2>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#62766B]">
            Simple, transparent, and collaborative from start to finish.
          </p>
        </motion.div>

        <div className="grid gap-12 sm:gap-14 lg:grid-cols-4 lg:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: 'easeOut',
                }}
                className="relative text-center lg:text-left"
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+42px)] top-8 hidden h-px w-[calc(100%-70px)] bg-[#DED9CF] lg:block" />
                )}

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.12 + 0.1,
                    ease: 'easeOut',
                  }}
                  className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D9E2D8] text-[#557462] lg:mx-0"
                >
                  <Icon size={24} />
                </motion.div>

                <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#557462]/60">
                  {step.number}
                </p>

                <h3 className="font-heading text-2xl font-bold text-[#1E2B24] lg:text-xl">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#62766B] lg:mx-0">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}