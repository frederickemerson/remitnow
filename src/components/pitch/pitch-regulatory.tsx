"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle2, Clock, AlertCircle } from "lucide-react"

const regulatoryTimeline = [
  {
    country: "Philippines",
    flag: "🇵🇭",
    licenses: [
      { name: "BSP VASP Registration", status: "in-progress", timeline: "6-9 months", cost: "$50K" },
      { name: "KYC/AML Compliance", status: "completed", timeline: "Completed", cost: "$20K" },
    ],
    strategy: "Partner with existing VASP (Coins.ph) during interim period",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    licenses: [
      { name: "MAS MPI License", status: "planned", timeline: "6-12 months", cost: "$150K" },
      { name: "Exemption Regime", status: "in-progress", timeline: "Active", cost: "$0" },
    ],
    strategy: "Operate under exemption (<SGD 5M/month) while MPI application pending",
  },
  {
    country: "India",
    flag: "🇮🇳",
    licenses: [
      { name: "RBI MTSS License", status: "planned", timeline: "18-24 months", cost: "$200K" },
      { name: "Partner with Licensed NBFC", status: "in-progress", timeline: "Q2 2025", cost: "$0" },
    ],
    strategy: "Operate via Singapore entity, partner with WazirX for INR disbursements",
  },
  {
    country: "Indonesia",
    flag: "🇮🇩",
    licenses: [
      { name: "BAPPEBTI Crypto License", status: "planned", timeline: "6-9 months", cost: "$80K" },
      { name: "Bank Indonesia PJSP", status: "planned", timeline: "12-18 months", cost: "$100K" },
    ],
    strategy: "Partner with Tokocrypto (licensed exchange) for compliance",
  },
]

export function PitchRegulatory() {
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Regulatory <span className="text-primary">Compliance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Proactive licensing strategy with partner-based interim solutions
          </p>
        </motion.div>

        <div className="space-y-8">
          {regulatoryTimeline.map((country, index) => (
            <motion.div
              key={country.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-background border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{country.flag}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{country.country}</h3>
                  <p className="text-sm text-muted-foreground">{country.strategy}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {country.licenses.map((license, lIndex) => (
                  <div key={lIndex} className="p-4 rounded-xl bg-muted/50 border">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-sm">{license.name}</h4>
                      {license.status === "completed" ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : license.status === "in-progress" ? (
                        <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{license.timeline}</span>
                      <span className="font-medium">{license.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-teal-500/10 border border-primary/20"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Compliance Infrastructure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Jumio + Onfido</div>
              <div className="text-sm text-muted-foreground">KYC verification ($1/user)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Chainalysis</div>
              <div className="text-sm text-muted-foreground">Transaction monitoring & AML</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">FICO Falcon</div>
              <div className="text-sm text-muted-foreground">Fraud detection & prevention</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
