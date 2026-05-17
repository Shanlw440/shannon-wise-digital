import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '/about', page: true },
  { label: 'Reviews', href: '/reviews', page: true },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (href) => {
    setOpen(false);

    if (location.pathname !== '/') {
      navigate('/');

      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = (link) => {
    if (link.page) {
      setOpen(false);
      navigate(link.href);
      return;
    }

    scrollToSection(link.href);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#DED9CF]/70 bg-[#F8F5F0]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:py-4">
        <Link to="/" className="flex items-center" aria-label="Go to homepage">
          <img
            src="/logo.png"
            alt="Shannon Wise Digital"
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link)}
              className="text-sm font-medium text-[#1E2B24]/70 transition hover:text-[#557462]"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection('#contact')}
            className="rounded-full bg-[#557462] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#496758]"
          >
            Get a Quote
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DED9CF] bg-white/70 text-[#1E2B24] shadow-sm md:hidden"
          aria-label="Open menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#DED9CF] bg-[#F8F5F0] px-5 pb-5 pt-3 shadow-lg md:hidden">
          <div className="rounded-3xl border border-[#DED9CF] bg-white/75 p-3 shadow-sm">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link)}
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-semibold text-[#1E2B24] transition hover:bg-[#F3EFE8]"
              >
                {link.label}
                <span className="text-[#557462]">→</span>
              </button>
            ))}

            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-3 flex h-12 w-full items-center justify-center rounded-full bg-[#557462] px-5 text-base font-semibold text-white shadow-md shadow-[#557462]/20"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}