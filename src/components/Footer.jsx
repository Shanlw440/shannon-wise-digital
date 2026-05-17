import { Link, useLocation, useNavigate } from 'react-router-dom';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '/about', page: true },
  { label: 'Reviews', href: '/reviews', page: true },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (link) => {
    if (link.page) {
      navigate(link.href);

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);

      return;
    }

    if (location.pathname !== '/') {
      navigate('/');

      setTimeout(() => {
        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

      return;
    }

    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E2B24] px-5 py-8 text-[#F8F5F0] sm:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-7 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
          <div>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block"
            >
              <p className="font-heading text-2xl font-bold text-[#F8F5F0]">
                Shannon Wise
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#D9E2D8]">
                Digital
              </p>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#F8F5F0]/65">
              Mobile-first websites for small businesses that want to look polished,
              trustworthy and easy to contact online.
            </p>
          </div>

          <div>
            <p className="font-heading text-lg font-bold text-[#F8F5F0]">
              Quick Links
            </p>

            <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-2 md:grid-cols-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link)}
                  className="w-fit text-left text-sm text-[#F8F5F0]/65 transition hover:text-[#F8F5F0]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-heading text-lg font-bold text-[#F8F5F0]">
              Contact
            </p>

            <div className="mt-3 space-y-2 text-sm text-[#F8F5F0]/65">
              <p>shannonwisedigital@gmail.com</p>
              <p>Lincolnshire, UK</p>
            </div>
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-5 text-xs text-[#F8F5F0]/45">
          © {currentYear} Shannon Wise Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}