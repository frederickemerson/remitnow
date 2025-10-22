"use client"

import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts"
import { useTheme } from "next-themes"

const revenueData = [
  { month: "M3", transactionFees: 2.5, yieldSpread: 1, cardRevenue: 0, total: 3.5 },
  { month: "M6", transactionFees: 25, yieldSpread: 10, cardRevenue: 2, total: 37 },
  { month: "M9", transactionFees: 82.5, yieldSpread: 33, cardRevenue: 8, total: 123.5 },
  { month: "M12", transactionFees: 125, yieldSpread: 50, cardRevenue: 15, total: 190 },
  { month: "M15", transactionFees: 187.5, yieldSpread: 75, cardRevenue: 25, total: 287.5 },
  { month: "M18", transactionFees: 250, yieldSpread: 100, cardRevenue: 40, total: 390 },
]

const userGrowthData = [
  { month: "M3", philippines: 1000, singapore: 0, india: 0, indonesia: 0 },
  { month: "M6", philippines: 8000, singapore: 2000, india: 0, indonesia: 0 },
  { month: "M9", philippines: 20000, singapore: 8000, india: 5000, indonesia: 0 },
  { month: "M12", philippines: 30000, singapore: 12000, india: 8000, indonesia: 0 },
  { month: "M15", philippines: 40000, singapore: 15000, india: 12000, indonesia: 8000 },
  { month: "M18", philippines: 50000, singapore: 20000, india: 18000, indonesia: 12000 },
]

export function PitchFinancialsEnhanced() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const chartColors = {
    primary: isDark ? "hsl(271, 91%, 65%)" : "hsl(271, 91%, 50%)",
    chart2: isDark ? "hsl(173, 58%, 60%)" : "hsl(173, 58%, 39%)",
    chart3: isDark ? "hsl(197, 37%, 60%)" : "hsl(197, 37%, 24%)",
    chart4: isDark ? "hsl(43, 74%, 66%)" : "hsl(43, 74%, 49%)",
    grid: isDark ? "hsl(240, 3.7%, 25%)" : "hsl(240, 5.9%, 90%)",
    text: isDark ? "hsl(240, 5%, 84%)" : "hsl(240, 5.9%, 10%)",
  }

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
            Financial <span className="text-primary">Projections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Path to $4.68M ARR in 18 months with clear unit economics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-background border"
          >
            <h3 className="text-xl font-bold mb-6">Revenue Growth (Monthly, $K)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis dataKey="month" stroke={chartColors.text} style={{ fontSize: "12px" }} />
                <YAxis stroke={chartColors.text} style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "hsl(240, 10%, 3.9%)" : "hsl(0, 0%, 100%)",
                    border: `1px solid ${isDark ? "hsl(240, 3.7%, 15.9%)" : "hsl(240, 5.9%, 90%)"}`,
                    borderRadius: "8px",
                    color: chartColors.text,
                  }}
                />
                <Legend wrapperStyle={{ color: chartColors.text }} />
                <Bar dataKey="transactionFees" stackId="a" fill={chartColors.primary} name="Transaction Fees" />
                <Bar dataKey="yieldSpread" stackId="a" fill={chartColors.chart2} name="Yield Spread" />
                <Bar dataKey="cardRevenue" stackId="a" fill={chartColors.chart3} name="Card Revenue" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-background border"
          >
            <h3 className="text-xl font-bold mb-6">User Growth by Country</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis dataKey="month" stroke={chartColors.text} style={{ fontSize: "12px" }} />
                <YAxis stroke={chartColors.text} style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "hsl(240, 10%, 3.9%)" : "hsl(0, 0%, 100%)",
                    border: `1px solid ${isDark ? "hsl(240, 3.7%, 15.9%)" : "hsl(240, 5.9%, 90%)"}`,
                    borderRadius: "8px",
                    color: chartColors.text,
                  }}
                />
                <Legend wrapperStyle={{ color: chartColors.text }} />
                <Line
                  type="monotone"
                  dataKey="philippines"
                  stroke={chartColors.primary}
                  strokeWidth={2}
                  name="Philippines"
                />
                <Line
                  type="monotone"
                  dataKey="singapore"
                  stroke={chartColors.chart2}
                  strokeWidth={2}
                  name="Singapore"
                />
                <Line type="monotone" dataKey="india" stroke={chartColors.chart3} strokeWidth={2} name="India" />
                <Line
                  type="monotone"
                  dataKey="indonesia"
                  stroke={chartColors.chart4}
                  strokeWidth={2}
                  name="Indonesia"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="p-6 rounded-xl bg-background border">
            <div className="text-sm text-muted-foreground mb-2">Month 18 Revenue</div>
            <div className="text-3xl font-bold text-primary mb-1">$390K</div>
            <div className="text-xs text-muted-foreground">Monthly</div>
          </div>
          <div className="p-6 rounded-xl bg-background border">
            <div className="text-sm text-muted-foreground mb-2">Annual Run Rate</div>
            <div className="text-3xl font-bold text-primary mb-1">$4.68M</div>
            <div className="text-xs text-muted-foreground">ARR at Month 18</div>
          </div>
          <div className="p-6 rounded-xl bg-background border">
            <div className="text-sm text-muted-foreground mb-2">ARPU</div>
            <div className="text-3xl font-bold text-primary mb-1">$6.50</div>
            <div className="text-xs text-muted-foreground">Per user/month</div>
          </div>
          <div className="p-6 rounded-xl bg-background border">
            <div className="text-sm text-muted-foreground mb-2">LTV:CAC</div>
            <div className="text-3xl font-bold text-primary mb-1">10:1</div>
            <div className="text-xs text-muted-foreground">Target ratio</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-teal-500/10 border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Unit Economics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm text-muted-foreground mb-2">Revenue per Transaction</div>
              <div className="text-2xl font-bold mb-1">$2.50</div>
              <div className="text-xs text-muted-foreground">0.5% fee on $500 avg</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Customer Acquisition Cost</div>
              <div className="text-2xl font-bold mb-1">$15-20</div>
              <div className="text-xs text-muted-foreground">Blended across channels</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Lifetime Value (3 years)</div>
              <div className="text-2xl font-bold mb-1">$234</div>
              <div className="text-xs text-muted-foreground">$6.50 ARPU × 36 months</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
