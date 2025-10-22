import { Button } from "~/components/ui/button"
import { ArrowRight, DollarSign, TrendingUp, Users, Zap } from "lucide-react"

export function PitchFunding() {
  const highlights = [
    {
      icon: DollarSign,
      title: "Massive Market",
      description: "$700B TAM, growing 5% YoY",
    },
    {
      icon: TrendingUp,
      title: "Superior Unit Economics",
      description: "LTV:CAC ratio of 15.6x",
    },
    {
      icon: Zap,
      title: "Technology Moat",
      description: "Solana speed + DeFi integration",
    },
    {
      icon: Users,
      title: "Network Effects",
      description: "Viral loops via group savings",
    },
  ]

  return (
    <section className="border-b py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Investment Opportunity</h2>
            <p className="text-lg text-muted-foreground">Join us in revolutionizing global remittances</p>
          </div>

          <div className="mb-12 rounded-lg border-2 border-primary bg-primary/5 p-8 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">Funding Ask</div>
            <div className="mb-2 text-5xl font-bold">$2M</div>
            <div className="mb-4 text-lg text-muted-foreground">Seed Round</div>
            <div className="mb-6 flex items-center justify-center gap-8 text-sm">
              <div>
                <div className="font-semibold">Valuation</div>
                <div className="text-muted-foreground">$10M pre-money</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="font-semibold">Equity</div>
                <div className="text-muted-foreground">20%</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="font-semibold">Runway</div>
                <div className="text-muted-foreground">18 months</div>
              </div>
            </div>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-6 text-center transition-all hover:scale-105 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-semibold">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-12 rounded-lg border bg-card p-8">
            <h3 className="mb-6 text-center text-xl font-bold">Use of Funds</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <span className="text-sm">Engineering (40%)</span>
                  </div>
                  <span className="font-semibold">$800K</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-accent" />
                    <span className="text-sm">Marketing & Growth (35%)</span>
                  </div>
                  <span className="font-semibold">$700K</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-primary/60" />
                    <span className="text-sm">Operations (15%)</span>
                  </div>
                  <span className="font-semibold">$300K</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-accent/60" />
                    <span className="text-sm">Security Audit (10%)</span>
                  </div>
                  <span className="font-semibold">$200K</span>
                </div>
              </div>
              <div className="rounded-lg bg-muted/50 p-6">
                <h4 className="mb-4 font-semibold">Key Milestones</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Mainnet launch with security audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>1,000 beta users in Philippines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>$5M monthly transaction volume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Mobile app and WhatsApp bot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Banking partnership in 1 country</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Ready for Series A fundraise</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-lg border bg-muted/50 p-8">
            <h3 className="mb-6 text-center text-xl font-bold">Exit Opportunities</h3>
            <div className="mb-6 text-center text-sm text-muted-foreground">Target: $500M-$1B exit in 5-7 years</div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { company: "Xe.com", acquirer: "Euronet", price: "$1.0B", year: "2015" },
                { company: "Xoom", acquirer: "PayPal", price: "$1.1B", year: "2015" },
                { company: "Remitly", acquirer: "IPO", price: "$6.4B", year: "2021" },
                { company: "Wise", acquirer: "IPO", price: "$11B", year: "2021" },
              ].map((exit, index) => (
                <div key={index} className="rounded-lg border bg-card p-4 text-center">
                  <div className="mb-1 font-semibold">{exit.company}</div>
                  <div className="mb-1 text-xs text-muted-foreground">{exit.acquirer}</div>
                  <div className="text-lg font-bold text-primary">{exit.price}</div>
                  <div className="text-xs text-muted-foreground">{exit.year}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="mb-6 text-2xl font-bold">Ready to Join Us?</h3>
            <div className="mb-8 text-muted-foreground">
              Let&apos;s discuss how RemitNow can transform global remittances together
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Schedule a Meeting
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Download Full Deck
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">Contact: team@remitnow.app • Twitter: @RemitNowApp</div>
          </div>
        </div>
      </div>
    </section>
  )
}
