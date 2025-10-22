import { Check, TrendingUp, Zap, CreditCard, Globe, Clock, Users } from "lucide-react"

export function PitchSolution() {
  const features = [
    {
      icon: Zap,
      title: "Ultra-Low Fees (0.5%)",
      description: "$1,000 sent → $5 fee → $995 received",
      savings: "Save $60 vs Western Union",
    },
    {
      icon: TrendingUp,
      title: "Real Yields (8% APY)",
      description: "Kamino Finance integration",
      savings: "$477 extra earnings per year on $6K",
    },
    {
      icon: Clock,
      title: "Instant Settlement",
      description: "400ms finality on Solana",
      savings: "24/7/365 availability",
    },
    {
      icon: Globe,
      title: "Cross-Chain Support",
      description: "7 blockchains via Circle CCTP",
      savings: "Ethereum, Avalanche, Optimism, Base",
    },
    {
      icon: Users,
      title: "Group Savings Incentives",
      description: "Bonus yields for group pots",
      savings: "Up to 10% APY with 10+ members",
    },
    {
      icon: CreditCard,
      title: "Virtual Cards (Lithic)",
      description: "Spend savings directly",
      savings: "70M+ merchants worldwide",
    },
  ]

  return (
    <section className="border-b bg-muted/20 py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Solution</h2>
            <p className="text-lg text-muted-foreground">
              A Solana-powered remittance and savings platform that actually works for families
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-lg border bg-card p-6 transition-all hover:scale-105 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="mb-2 text-sm text-muted-foreground">{feature.description}</p>
                <div className="flex items-start gap-2 text-xs text-accent">
                  <Check className="mt-0.5 h-3 w-3 flex-shrink-0" />
                  <span>{feature.savings}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border bg-card p-8">
            <h3 className="mb-6 text-center text-2xl font-bold">Cost Comparison</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border-2 border-destructive/20 bg-destructive/5 p-6">
                <div className="mb-4 text-center text-lg font-semibold text-destructive">
                  Traditional (Western Union)
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount sent:</span>
                    <span className="font-mono">$1,000</span>
                  </div>
                  <div className="flex justify-between text-destructive">
                    <span>Fee (6.5%):</span>
                    <span className="font-mono">-$65</span>
                  </div>
                  <div className="border-t pt-2" />
                  <div className="flex justify-between font-bold">
                    <span>Received:</span>
                    <span className="font-mono">$935</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                <div className="mb-4 text-center text-lg font-semibold text-primary">RemitNow</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount sent:</span>
                    <span className="font-mono">$1,000</span>
                  </div>
                  <div className="flex justify-between text-primary">
                    <span>Fee (0.5%):</span>
                    <span className="font-mono">-$5</span>
                  </div>
                  <div className="border-t pt-2" />
                  <div className="flex justify-between font-bold">
                    <span>Received:</span>
                    <span className="font-mono">$995</span>
                  </div>
                  <div className="mt-4 rounded bg-accent/10 p-2 text-center text-xs font-semibold text-accent">
                    Save $60 (1200% difference)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
