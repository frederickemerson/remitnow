"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, DollarSign, Globe, Zap, Target } from "lucide-react"

const metrics = [
  {
    icon: Users,
    label: "Target Users (18 months)",
    value: "100,000",
    subtext: "Across 4 countries",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: DollarSign,
    label: "Monthly Volume",
    value: "$50M",
    subtext: "By month 18",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    icon: TrendingUp,
    label: "Annual Run Rate",
    value: "$4.68M",
    subtext: "Month 18 ARR",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    icon: Globe,
    label: "Market Coverage",
    value: "7",
    subtext: "Countries by Q4 2025",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    icon: Zap,
    label: "Cost Savings",
    value: "12x",
    subtext: "0.5% vs 6-8% fees",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Target,
    label: "CAC Target",
    value: "<$20",
    subtext: "Customer acquisition",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function MetricsDashboard() {
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
            Ambitious Yet <span className="text-primary">Achievable</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Data-driven targets backed by proven market demand and strategic partnerships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="p-6 rounded-2xl bg-background border hover:border-primary/50 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${metric.bgColor} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.subtext}</div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-teal-500/10 border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Growth Trajectory</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Month 3</div>
              <div className="text-2xl font-bold text-primary">1,000</div>
              <div className="text-xs text-muted-foreground">users</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Month 6</div>
              <div className="text-2xl font-bold text-primary">10,000</div>
              <div className="text-xs text-muted-foreground">users</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Month 12</div>
              <div className="text-2xl font-bold text-primary">50,000</div>
              <div className="text-xs text-muted-foreground">users</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Month 18</div>
              <div className="text-2xl font-bold text-primary">100,000</div>
              <div className="text-xs text-muted-foreground">users</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
