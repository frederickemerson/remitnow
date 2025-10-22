"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Target, Megaphone } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    title: "Community Building",
    timeline: "Months 1-3",
    target: "1,000 Beta Users",
    icon: Users,
    tactics: [
      "Diaspora community outreach (OFW associations)",
      "Facebook groups (500+ groups, 10M+ members)",
      "TikTok influencers (OFW content creators)",
      "Referral program ($5 USDC per referral)",
      "University partnerships (UP, Ateneo, La Salle)",
    ],
    metrics: {
      users: "1,000",
      volume: "$250K",
      cac: "$20",
      referralRate: "40%",
    },
  },
  {
    phase: "Phase 2",
    title: "Influencer Marketing",
    timeline: "Months 4-6",
    target: "10,000 Users",
    icon: Megaphone,
    tactics: [
      "Crypto influencer campaigns (5 influencers)",
      "Content marketing & SEO (50 blog posts)",
      "Podcast sponsorships (OFW Radio Dubai)",
      "YouTube pre-roll ads (Philippines)",
    ],
    metrics: {
      users: "10,000",
      volume: "$5M",
      cac: "$25",
      referralRate: "35%",
    },
  },
  {
    phase: "Phase 3",
    title: "Paid Acquisition",
    timeline: "Months 7-12",
    target: "50,000 Users",
    icon: Target,
    tactics: [
      "Facebook/Instagram ads ($80K budget)",
      "Google Search ads ($60K budget)",
      "TikTok ads ($40K budget)",
      "Affiliate partnerships (Monito, CompareRemit)",
      "Corporate partnerships (recruitment agencies)",
    ],
    metrics: {
      users: "50,000",
      volume: "$25M",
      cac: "$18",
      referralRate: "30%",
    },
  },
  {
    phase: "Phase 4",
    title: "Scale & Optimize",
    timeline: "Months 13-18",
    target: "100,000 Users",
    icon: TrendingUp,
    tactics: [
      "Localization (4 languages)",
      "Offline marketing (airport billboards)",
      "Employer partnerships (factory workers)",
      "PR & media (TechCrunch, Bloomberg)",
    ],
    metrics: {
      users: "100,000",
      volume: "$50M",
      cac: "$15",
      referralRate: "30%",
    },
  },
]

export function PitchGTM() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Go-to-Market <span className="text-primary">Strategy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            4-phase approach from community building to scale, targeting 100K users in 18 months
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-background border hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm font-medium text-primary mb-2">{phase.phase}</div>
                    <h3 className="text-2xl font-bold mb-1">{phase.title}</h3>
                    <div className="text-sm text-muted-foreground">{phase.timeline}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="mb-6 p-4 rounded-xl bg-muted/50">
                  <div className="text-sm text-muted-foreground mb-1">Target</div>
                  <div className="text-2xl font-bold text-primary">{phase.target}</div>
                </div>

                <div className="space-y-2 mb-6">
                  {phase.tactics.map((tactic, tIndex) => (
                    <div key={tIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{tactic}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Total Users</div>
                    <div className="text-lg font-bold">{phase.metrics.users}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Monthly Volume</div>
                    <div className="text-lg font-bold">{phase.metrics.volume}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">CAC</div>
                    <div className="text-lg font-bold">{phase.metrics.cac}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Referral Rate</div>
                    <div className="text-lg font-bold">{phase.metrics.referralRate}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-teal-500/10 border border-primary/20"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Key Success Factors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Partnership-First</div>
              <div className="text-sm text-muted-foreground">Leverage existing banking/telco infrastructure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Compliance Day 1</div>
              <div className="text-sm text-muted-foreground">KYC/AML systems before launch</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Community-Driven</div>
              <div className="text-sm text-muted-foreground">Referrals, influencers, diaspora networks</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
