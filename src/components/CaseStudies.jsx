import { motion } from 'framer-motion';

const cases = [
  {
    name: 'DeFi Liquidity Protocol',
    result: 'Increased TVL to $120M in 4 months',
    tags: ['Tokenomics', 'Protocol Design', 'Growth'],
  },
  {
    name: 'Enterprise Wallet Rollout',
    result: 'Shipped to 50k users with zero-sev incidents',
    tags: ['Security', 'Compliance', 'Smart Contracts'],
  },
  {
    name: 'Scaling Rollup Throughput',
    result: '3x TPS with modular prover pipeline',
    tags: ['L2', 'Infrastructure', 'Optimization'],
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected work</h2>
          <p className="mt-3 text-white/70">Outcomes weve helped teams achieve.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/10 to-cyan-500/10" />
              <h3 className="relative text-lg font-semibold">{c.name}</h3>
              <p className="relative mt-2 text-sm text-white/70">{c.result}</p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
