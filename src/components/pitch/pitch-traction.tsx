import { CheckCircle2, Target, TrendingUp } from "lucide-react"

export function PitchTraction() {
  const milestones = [
    {
      quarter: "Q1 2025",
      title: "Beta Launch",
      goals: [
        "Mainnet deployment",
        "Security audit (CertiK/Kudelski)",
        "1,000 beta users (Philippines pilot)",
        "$500K transaction volume",
        "Fiat on-ramp (Transak/MoonPay)",
      ],
    },
    {
      quarter: "Q2 2025",
      title: "Growth",
      goals: [
        "10,000 users",
        "$5M monthly volume",
        "Mobile app launch (React Native)",
        "WhatsApp bot integration",
        "Banking partnership (1 country)",
      ],
    },
    {
      quarter: "Q3 2025",
      title: "Scale",
      goals: [
        "50,000 users",
        "$25M monthly volume",
        "Expand to 3 more corridors",
        "B2B API for remittance companies",
        "Institutional yield products",
      ],
    },
    {
      quarter: "Q4 2025",
      title: "Profitability",
      goals: [
        "100,000 users",
        "$50M monthly volume",
        "Break-even operations",
        "$REMIT token launch (governance)",
        "Series A fundraise",
      ],
    },
  ]

  return (
    <section className="border-b py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Traction & Roadmap</h2>
            <p className="text-lg text-muted-foreground">MVP complete, ready to scale with clear milestones</p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-accent/10 p-3">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold">MVP Complete</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Smart contracts deployed</li>
                <li>✓ Frontend app live (PWA)</li>
                <li>✓ Kamino yield integration</li>
                <li>✓ Cross-chain transfers</li>
                <li>✓ Virtual card issuance</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold">Technology Ready</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ 100% test coverage</li>
                <li>✓ PDA-based security</li>
                <li>✓ TypeScript client</li>
                <li>✓ Telegram bot operational</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-accent/10 p-3">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold">Hackathon Success</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>🏆 Solana Cypherpunk</li>
                <li>Category: Stablecoins</li>
                <li>Score target: 9.5/10</li>
                <li>Real-world impact</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-center text-2xl font-bold">12-Month Roadmap</h3>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {milestone.quarter}
                  </div>
                  <h4 className="text-lg font-bold">{milestone.title}</h4>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {milestone.goals.map((goal, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 text-muted-foreground">🎯</span>
                      <span className="text-muted-foreground">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
