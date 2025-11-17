import { motion } from 'framer-motion';
import { Shield, Boxes, Zap, Cpu, Rocket, LineChart } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Compliance & Risk',
    desc: 'Navigate global regulations with frameworks for AML/KYC, token classification, and governance best practices.'
  },
  {
    icon: Boxes,
    title: 'Tokenomics',
    desc: 'Design sustainable incentive models with clear utility, emissions, and governance structures.'
  },
  {
    icon: Cpu,
    title: 'Protocol Architecture',
    desc: 'End-to-end design for L1/L2, DeFi, and infra—security-first patterns and modular components.'
  },
  {
    icon: Zap,
    title: 'Smart Contracts',
    desc: 'Audit-ready solidity and move-based contracts, test suites, and deployment pipelines.'
  },
  {
    icon: LineChart,
    title: 'Growth & Metrics',
    desc: 'On-chain analytics, dashboards, and experiments to drive adoption and retention.'
  },
  {
    icon: Rocket,
    title: 'Go-to-Market',
    desc: 'Narratives, positioning, and ecosystem partnerships for credible launches.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Advisory and build services</h2>
          <p className="mt-3 text-white/70">Focused, senior expertise across the stack—no fluff.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 backdrop-blur shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
