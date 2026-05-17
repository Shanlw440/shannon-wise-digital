import { useState } from 'react';
import { Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const EMAIL = 'shannonwisedigital@gmail.com';
const WHATSAPP_NUMBER = '447704600083';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const updateForm = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const openEmail = () => {
    const subject = encodeURIComponent('Website enquiry');

    const body = encodeURIComponent(
      `Hi Shannon,

I’m interested in a website and would like to discuss a project.

Name: ${form.name || ''}
Email: ${form.email || ''}

Message:
${form.message || ''}

Thanks,`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Shannon, I’m interested in a website and would like to discuss a project.

Name: ${form.name || ''}
Message: ${form.message || ''}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="bg-[#F3EFE8] px-5 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#557462]">
            Let's Talk
          </p>

          <h2 className="font-heading text-4xl font-bold tracking-[-0.03em] text-[#1E2B24] sm:text-5xl">
            Get In Touch
          </h2>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#62766B]">
            Ready to start your website? Send me a message and I’ll get back to you as soon as I can.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <div className="space-y-4">
            <ContactCard
              icon={Mail}
              title="Email"
              text={EMAIL}
              onClick={openEmail}
            />

            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              text="07704 600083"
              onClick={openWhatsApp}
            />

            <ContactCard
              icon={MapPin}
              title="Location"
              text="Lincolnshire, UK"
            />

            <ContactCard
              icon={Clock}
              title="Response Time"
              text="Within 24 hours"
            />
          </div>

          <form className="rounded-3xl border border-[#DED9CF] bg-white/70 p-5 shadow-sm sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1E2B24]">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                  placeholder="Your name"
                  className="h-12 w-full rounded-2xl border border-[#DED9CF] bg-[#F8F5F0] px-4 text-sm text-[#1E2B24] outline-none transition focus:border-[#557462]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1E2B24]">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-2xl border border-[#DED9CF] bg-[#F8F5F0] px-4 text-sm text-[#1E2B24] outline-none transition focus:border-[#557462]"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-semibold text-[#1E2B24]">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => updateForm('message', e.target.value)}
                placeholder="Tell me about your project..."
                rows="6"
                className="w-full resize-none rounded-2xl border border-[#DED9CF] bg-[#F8F5F0] px-4 py-3 text-sm text-[#1E2B24] outline-none transition focus:border-[#557462]"
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={openEmail}
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#557462] px-8 text-base font-semibold text-white shadow-lg shadow-[#557462]/20 transition hover:bg-[#496758]"
              >
                <Send className="mr-2 h-4 w-4" />
                Email Me
              </button>

              <button
                type="button"
                onClick={openWhatsApp}
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-[#557462]/30 bg-white/70 px-8 text-base font-semibold text-[#557462] shadow-sm transition hover:bg-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, text, onClick }) {
  const content = (
    <>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D9E2D8] text-[#557462]">
        <Icon size={20} />
      </div>

      <div>
        <p className="font-heading text-lg font-bold text-[#1E2B24]">
          {title}
        </p>
        <p className="mt-1 text-sm text-[#62766B]">{text}</p>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center gap-4 rounded-3xl border border-[#DED9CF] bg-white/70 p-5 text-left shadow-sm transition hover:border-[#557462]/25 hover:shadow-lg"
      >
        {content}
      </button>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-3xl border border-[#DED9CF] bg-white/70 p-5 shadow-sm">
      {content}
    </div>
  );
}