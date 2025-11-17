import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(56,189,248,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70 shadow backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Web3 Strategy, Tokenomics, and Protocol Design
          </div>
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Build bold, compliant, and scalable web3 products
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
            We partner with founders and enterprises to architect blockchain systems, design sustainable token economies, and ship production-ready dApps.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/10 transition hover:scale-[1.02] hover:bg-slate-100">
              Book discovery call
            </a>
            <a href="#services" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
              Explore services
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
