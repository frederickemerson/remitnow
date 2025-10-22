"use client"

import { motion } from "framer-motion"
import { Building2, Smartphone, Landmark, Zap } from "lucide-react"

const partners = {
  onRamp: [
    { name: "GCash", users: "85M", country: "Philippines", status: "Live" },
    { name: "Maya", users: "5M", country: "Philippines", status: "Live" },
    { name: "PhonePe", users: "450M", country: "India", status: "Live" },
    { name: "WazirX", users: "15M", country: "India", status: "Live" },
    { name: "Tokocrypto", users: "3M", country: "Indonesia", status: "Live" },
    { name: "Coins.ph", users: "18M", country: "Philippines", status: "Integration" },
  ],
  offRamp: [
    { name: "UnionBank", users: "7M", country: "Philippines", status: "Live" },
    { name: "DBS", users: "6M", country: "Singapore", status: "Integration" },
    { name: "Paytm", users: "350M", country: "India", status: "Integration" },
    { name: "OVO", users: "115M", country: "Indonesia", status: "Integration" },
    { name: "GoPay", users: "190M", country: "Indonesia", status: "Integration" },
    { name: "Dana", users: "150M", country: "Indonesia", status: "Integration" },
  ],
  cashPickup: [
    { name: "Cebuana Lhuillier", locations: "2,400", country: "Philippines", status: "Integration" },
    { name: "M Lhuillier", locations: "3,000", country: "Philippines", status: "Integration" },
    { name: "7-Eleven", locations: "13,000", country: "Thailand", status: "Planned" },
    { name: "Indomaret", locations: "19,000", country: "Indonesia", status: "Planned" },
  ],
}

const categories = [
  { key: "onRamp", title: "On-Ramp Partners", icon: Zap, color: "text-teal-500" },
  { key: "offRamp", title: "Off-Ramp Partners", icon: Landmark, color: "text-purple-500" },
  { key: "cashPickup", title: "Cash Pickup Networks", icon: Building2, color: "text-orange-500" },
]

export function Partnerships() {
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
            Powered by <span className="text-primary">50+ Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Seamless integrations with leading banks, mobile wallets, and cash networks across Asia
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon
            const categoryPartners = partners[category.key as keyof typeof partners]

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-xl bg-background border ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <span className="ml-auto text-sm text-muted-foreground">{categoryPartners.length} partners</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryPartners.map((partner, index) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="p-6 rounded-xl bg-background border hover:border-primary/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-lg mb-1">{partner.name}</h4>
                          <p className="text-sm text-muted-foreground">{partner.country}</p>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            partner.status === "Live"
                              ? "bg-green-500/10 text-green-500"
                              : partner.status === "Integration"
                                ? "bg-blue-500/10 text-blue-500"
                                : "bg-gray-500/10 text-gray-500"
                          }`}
                        >
                          {partner.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {"users" in partner ? `${partner.users} users` : `${partner.locations} locations`}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-teal-500/10 border border-primary/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1.4B+</div>
              <div className="text-sm text-muted-foreground">Combined Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">600K+</div>
              <div className="text-sm text-muted-foreground">Cash Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Total Partners</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
