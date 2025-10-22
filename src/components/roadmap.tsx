"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Circle, Clock } from "lucide-react"

const roadmapData = [
  {
    quarter: "Q1 2025",
    title: "Foundation & Launch",
    status: "in-progress",
    milestones: [
      { text: "Core Platform Launch", done: true },
      { text: "GCash & Maya Integration (90M users)", done: true },
      { text: "Kamino Finance Yield Integration", done: true },
      { text: "BSP VASP Registration", done: false },
      { text: "5,000 Users, $500K Monthly Volume", done: false },
    ],
  },
  {
    quarter: "Q2 2025",
    title: "Singapore & India Expansion",
    status: "upcoming",
    milestones: [
      { text: "Singapore Market Entry (DBS, GrabPay)", done: false },
      { text: "India Launch (PhonePe 450M, Paytm 350M)", done: false },
      { text: "React Native Mobile App (iOS + Android)", done: false },
      { text: "MAS MPI License Application", done: false },
      { text: "25,000 Users, $2.5M Monthly Volume", done: false },
    ],
  },
  {
    quarter: "Q3 2025",
    title: "Indonesia & Feature Expansion",
    status: "upcoming",
    milestones: [
      { text: "Indonesia Launch (OVO 115M, GoPay 190M)", done: false },
      { text: "Multi-Yield Sources (MarginFi, Drift)", done: false },
      { text: "Recurring Remittances & Group Savings", done: false },
      { text: "Merchant Integration (Shopee, Lazada)", done: false },
      { text: "75,000 Users, $8M Monthly Volume", done: false },
    ],
  },
  {
    quarter: "Q4 2025",
    title: "Scale & Institutional",
    status: "upcoming",
    milestones: [
      { text: "Corporate Payroll Partnerships (BPO)", done: false },
      { text: "Thailand, Vietnam, Bangladesh Expansion", done: false },
      { text: "API Platform for Developers", done: false },
      { text: "NGO Partnerships (UNHCR, World Bank)", done: false },
      { text: "150,000 Users, $20M Monthly Volume", done: false },
    ],
  },
]

export function Roadmap() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            18-Month <span className="text-primary">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            From 5K users in Philippines to 150K users across 7 countries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {roadmapData.map((quarter, index) => (
              <motion.div
                key={quarter.quarter}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 hidden md:block">
                  <div
                    className={`w-4 h-4 rounded-full border-4 ${
                      quarter.status === "in-progress"
                        ? "bg-primary border-primary animate-pulse"
                        : quarter.status === "completed"
                          ? "bg-green-500 border-green-500"
                          : "bg-background border-border"
                    }`}
                  />
                </div>

                <div className="md:ml-20">
                  <div className="p-6 md:p-8 rounded-2xl bg-background border hover:border-primary/50 transition-all">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-sm font-medium text-primary mb-2">{quarter.quarter}</div>
                        <h3 className="text-2xl font-bold mb-2">{quarter.title}</h3>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          quarter.status === "in-progress"
                            ? "bg-primary/10 text-primary"
                            : quarter.status === "completed"
                              ? "bg-green-500/10 text-green-500"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {quarter.status === "in-progress"
                          ? "In Progress"
                          : quarter.status === "completed"
                            ? "Completed"
                            : "Upcoming"}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {quarter.milestones.map((milestone, mIndex) => (
                        <motion.div
                          key={mIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: mIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          {milestone.done ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : quarter.status === "in-progress" ? (
                            <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          )}
                          <span className={milestone.done ? "text-foreground" : "text-muted-foreground"}>
                            {milestone.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
            <span>2026 Goal:</span>
            <span className="font-bold">5M users • $2B annual volume • $100M ARR</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
