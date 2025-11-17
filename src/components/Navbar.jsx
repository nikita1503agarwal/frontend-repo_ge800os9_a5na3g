import { useState } from 'react';
import { Menu, X, Rocket, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Case Studies' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 md:py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-white">
                <Rocket size={20} />
              </div>
              <span className="font-semibold tracking-tight text-slate-800">NovaChain Consulting</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800 transition-colors">
                Book a call <ArrowRight size={16} />
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden grid place-items-center h-10 w-10 rounded-xl border border-slate-200 bg-white">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/20 px-4 py-3 space-y-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-700">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow">
                Book a call <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
