import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_20%,rgba(99,102,241,0.15),transparent),radial-gradient(500px_180px_at_20%_80%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-8 shadow-2xl backdrop-blur">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h3 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to architect your next web3 product?
            </motion.h3>
            <p className="mt-3 text-white/70">Tell us about your goals. Well share a short proposal within 48 hours.</p>
          </div>
          <form className="mt-8 grid gap-4 sm:grid-cols-2">
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/50 outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Name" />
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/50 outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Work email" />
            <input className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/50 outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Company / Project" />
            <textarea rows={4} className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/50 outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="What are you building?" />
            <div className="sm:col-span-2 flex items-center justify-center">
              <button type="button" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/10 transition hover:scale-[1.02] hover:bg-slate-100">
                Request proposal
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
