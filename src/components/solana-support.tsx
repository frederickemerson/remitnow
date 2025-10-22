"use client"

import { motion } from "framer-motion"
import { Zap, Globe, Users, TrendingUp, Shield, Rocket } from "lucide-react"

export function SolanaSupport() {
  const reasons = [
    {
      icon: Globe,
      title: "Ecosystem Expansion",
      description:
        "Bringing 270M migrants and 1.4B unbanked users to Solana, driving real-world adoption in Asia and Africa",
    },
    {
      icon: TrendingUp,
      title: "Transaction Volume",
      description:
        "Targeting $50M monthly volume by Month 18, generating significant on-chain activity and network fees",
    },
    {
      icon: Users,
      title: "DeFi Integration",
      description:
        "Deep integration with Solana DeFi protocols (Kamino, Jupiter, Drift) showcasing yield opportunities to mainstream users",
    },
    {
      icon: Zap,
      title: "Technical Innovation",
      description:
        "Pioneering ZK-proof privacy for KYC compliance, pushing boundaries of privacy-preserving identity on Solana",
    },
    {
      icon: Shield,
      title: "Regulatory Leadership",
      description:
        "Establishing compliance frameworks in 4+ markets, paving the way for institutional adoption of Solana",
    },
    {
      icon: Rocket,
      title: "Developer Showcase",
      description:
        "Open-source codebase demonstrating best practices for building production-grade financial apps on Solana",
    },
  ]

  const supportNeeds = [
    {
      category: "Technical Support",
      items: [
        "Access to Solana core team for optimization guidance",
        "Priority support for RPC infrastructure scaling",
        "Integration assistance with Solana Mobile Stack",
      ],
    },
    {
      category: "Go-to-Market",
      items: [
        "Co-marketing opportunities in target markets",
        "Introduction to regional partners and exchanges",
        "Featured placement in Solana ecosystem showcases",
      ],
    },
    {
      category: "Funding & Resources",
      items: [
        "Grant funding to accelerate development timeline",
        "Access to Solana Ventures network for future rounds",
        "Support for regulatory compliance costs ($150K+)",
      ],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Why We Need{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solana Foundation
            </span>{" "}
            Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            RemitNow is positioned to become Solana&apos;s flagship remittance application, bringing millions of users and
            billions in transaction volume to the ecosystem
          </p>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Needs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">How Solana Foundation Can Help</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {supportNeeds.map((need, index) => (
              <motion.div
                key={need.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-semibold mb-4 text-primary">{need.category}</h4>
                <ul className="space-y-3">
                  {need.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <p className="text-lg text-muted-foreground max-w-2xl">
              With Solana Foundation support, RemitNow can accelerate our timeline by 6 months, reach 100K users faster,
              and establish Solana as the leading blockchain for remittances globally.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <div>
                <div className="text-3xl font-bold text-primary">270M</div>
                <div className="text-sm text-muted-foreground">Target Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$50M</div>
                <div className="text-sm text-muted-foreground">Monthly Volume</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Markets</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Partnerships</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
