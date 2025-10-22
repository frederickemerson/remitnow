import { Card } from "~/components/ui/card"
import { TrendingUp, Users, Globe, Zap, Target, Coins, BarChart3, Rocket } from "lucide-react"

export function MarketProof() {
  const stats = [
    {
      icon: Globe,
      value: "$700B",
      label: "Global Remittances 2024",
      trend: "+4.6% YoY Growth",
    },
    {
      icon: TrendingUp,
      value: "$45B",
      label: "Annual Fees Paid (TAM)",
      trend: "6-8% avg fees",
    },
    {
      icon: Users,
      value: "250M",
      label: "Migrant Workers Globally",
      trend: "Target Market",
    },
    {
      icon: Zap,
      value: "400ms",
      label: "Solana Block Time",
      trend: "Instant settlement",
    },
  ]

  const advantages = [
    {
      icon: Target,
      title: "First-Mover in Yield Remittances",
      description:
        "While competitors focus on basic transfers, RemitNow is the first to combine remittances with automated DeFi yields. We're creating an entirely new category where every transfer becomes an investment.",
      metric: "7-20% APY",
    },
    {
      icon: Coins,
      title: "Massive Untapped Market",
      description:
        "The $700B remittance market pays $45B in fees annually, yet stablecoin adoption is under 2%. We're capturing this blue ocean with mobile-first UX designed for Asia and Africa.",
      metric: "$45B TAM",
    },
    {
      icon: BarChart3,
      title: "Superior Unit Economics",
      description:
        "Traditional providers take 6-8% per transaction. We charge 0.5% while offering yields, creating sustainable margins and unbeatable user loyalty. Our cost structure is 12x better.",
      metric: "12x cheaper",
    },
    {
      icon: Rocket,
      title: "Network Effects at Scale",
      description:
        "Shared pots create viral growth loops. Every family member invited strengthens the network, driving exponential user acquisition. One user becomes ten becomes a hundred.",
      metric: "Viral K-factor",
    },
  ]

  return (
    <section id="market" className="border-b bg-muted/30 py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">Why Now? Why RemitNow?</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            The perfect convergence of blockchain maturity, stablecoin adoption, and massive remittance demand creates a
            once-in-a-decade opportunity. We&apos;re positioned to capture it.
          </p>
        </div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-3 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform hover:scale-110">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="mb-1 text-3xl font-bold">{stat.value}</div>
              <div className="mb-2 text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.trend}</div>
            </Card>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold md:text-3xl">Our Unfair Advantages</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="p-6 transition-all hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
                    {advantage.metric}
                  </div>
                </div>
                <h4 className="mb-2 text-lg font-semibold">{advantage.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
