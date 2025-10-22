import { Card } from "~/components/ui/card"
import { AlertCircle, TrendingUp, Clock, DollarSign, Shield, Zap, Rocket } from "lucide-react"

export function ProblemSolution() {
  const problems = [
    {
      icon: DollarSign,
      title: "Crushing Fees",
      stat: "6-8%",
      description:
        "Traditional remittances cost 6-8% on average globally, with Sub-Saharan Africa facing the highest at 8.78%. Banks charge up to 14.55%. Families lose $45B annually to fees alone.",
      source: "World Bank Q1 2025",
    },
    {
      icon: Clock,
      title: "Painfully Slow",
      stat: "3-5 days",
      description:
        "Traditional wire transfers take days to clear through correspondent banking networks. Families wait when they need money urgently for bills, medical care, or education.",
      source: "Industry Average",
    },
    {
      icon: AlertCircle,
      title: "Money Sits Idle",
      stat: "$0 returns",
      description:
        "Remittances sit in accounts earning nothing. If fees dropped to the UN's 3% target, families could save $20B annually. Meanwhile, their savings generate zero yield.",
      source: "UN SDG 10.c Target",
    },
  ]

  const solutions = [
    {
      icon: Zap,
      title: "12x Cost Reduction",
      stat: "0.5%",
      description:
        "RemitNow charges just 0.5% vs 6-8% traditional fees. Powered by Solana's ultra-low transaction costs and stablecoin efficiency. Send $10,000 for under $50 instead of $600-$800.",
      highlight: "vs 6-8% traditional",
    },
    {
      icon: TrendingUp,
      title: "Earn While You Send",
      stat: "7-20% APY",
      description:
        "Shared pots automatically generate yields through battle-tested Kamino DeFi protocols. Your remittances work for you, earning passive income while staying accessible.",
      highlight: "First yield remittance app",
    },
    {
      icon: Rocket,
      title: "Instant Settlement",
      stat: "400ms",
      description:
        "Solana's 400ms block time means instant transfers. No more waiting days for money to clear. Your family gets funds immediately when they need them most.",
      highlight: "Powered by Solana",
    },
    {
      icon: Shield,
      title: "Privacy-First Compliance",
      stat: "ZK Proofs",
      description:
        "Zero-knowledge KYC ensures regulatory compliance without exposing personal data. Secure, private, and fully compliant with global regulations.",
      highlight: "Compliant + Private",
    },
  ]

  return (
    <section className="border-b py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">The $700B Problem Nobody&apos;s Solving</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Every year, 250 million migrant workers send $700 billion home to support their families. But outdated
            financial systems steal $45B in fees, delay critical transfers for days, and offer zero returns on savings.
            RemitNow changes everything.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Problems */}
          <div>
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive">
                <AlertCircle className="h-4 w-4" />
                The Broken System
              </div>
              <h3 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">Why Traditional Remittances Fail</h3>
              <p className="text-pretty text-muted-foreground">
                Families lose billions to predatory fees, slow settlement, and zero yields. The system is broken:
              </p>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <Card
                  key={index}
                  className="p-6 transition-all hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-left-3 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                      <problem.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-baseline justify-between gap-2">
                        <h4 className="font-semibold">{problem.title}</h4>
                        <span className="text-lg font-bold text-destructive">{problem.stat}</span>
                      </div>
                      <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
                      <p className="text-xs text-muted-foreground/70">Source: {problem.source}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Zap className="h-4 w-4" />
                The RemitNow Advantage
              </div>
              <h3 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
                Blockchain-Powered Financial Freedom
              </h3>
              <p className="text-pretty text-muted-foreground">
                Solana&apos;s speed + DeFi yields + stablecoin efficiency = a complete remittance revolution:
              </p>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="border-primary/20 bg-primary/5 p-6 transition-all hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-right-3 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-baseline justify-between gap-2">
                        <h4 className="font-semibold">{solution.title}</h4>
                        <span className="text-lg font-bold text-primary">{solution.stat}</span>
                      </div>
                      <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        <TrendingUp className="h-3 w-3" />
                        {solution.highlight}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
