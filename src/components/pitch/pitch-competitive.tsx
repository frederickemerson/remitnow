import { Check } from "lucide-react"

export function PitchCompetitive() {
  const competitors = [
    {
      name: "Western Union",
      fee: "6.5%",
      speed: "1-3 days",
      yield: "0%",
      advantage: "13x cheaper, instant, 8% APY",
    },
    {
      name: "MoneyGram",
      fee: "5.8%",
      speed: "1-2 days",
      yield: "0%",
      advantage: "11.6x cheaper, instant, 8% APY",
    },
    {
      name: "Wise",
      fee: "1-2%",
      speed: "1-2 days",
      yield: "0%",
      advantage: "2-4x cheaper, instant, 8% APY",
    },
    {
      name: "Remitly",
      fee: "2-3%",
      speed: "1 day",
      yield: "0%",
      advantage: "4-6x cheaper, 8% APY",
    },
  ]

  const differentiators = [
    "Only platform combining remittances + 8% yields + cards",
    "Best UX (PWA, Telegram bot, simple onboarding)",
    "Group savings incentives (bonus yields for groups)",
    "Gamification (challenges, leaderboards, referrals)",
    "Solana speed (400ms vs 15min Ethereum)",
    "Non-custodial (users own keys via wallet)",
  ]

  return (
    <section className="border-b bg-muted/20 py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Competitive Landscape</h2>
            <p className="text-lg text-muted-foreground">We&apos;re not just better - we&apos;re in a different league</p>
          </div>

          <div className="mb-12 overflow-x-auto">
            <table className="w-full rounded-lg border bg-card">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-4 text-left text-sm font-semibold">Competitor</th>
                  <th className="p-4 text-left text-sm font-semibold">Fee</th>
                  <th className="p-4 text-left text-sm font-semibold">Speed</th>
                  <th className="p-4 text-left text-sm font-semibold">Yield</th>
                  <th className="p-4 text-left text-sm font-semibold">Our Advantage</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="p-4 font-medium">{competitor.name}</td>
                    <td className="p-4 text-sm text-muted-foreground">{competitor.fee}</td>
                    <td className="p-4 text-sm text-muted-foreground">{competitor.speed}</td>
                    <td className="p-4 text-sm text-muted-foreground">{competitor.yield}</td>
                    <td className="p-4 text-sm text-accent">{competitor.advantage}</td>
                  </tr>
                ))}
                <tr className="bg-primary/5">
                  <td className="p-4 font-bold text-primary">RemitNow</td>
                  <td className="p-4 font-bold text-primary">0.5%</td>
                  <td className="p-4 font-bold text-primary">400ms</td>
                  <td className="p-4 font-bold text-primary">8% APY</td>
                  <td className="p-4 text-sm font-semibold text-primary">Market leader</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border bg-card p-8">
            <h3 className="mb-6 text-center text-xl font-bold">Unique Differentiators</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {differentiators.map((diff, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border bg-muted/50 p-4 transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">{diff}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
