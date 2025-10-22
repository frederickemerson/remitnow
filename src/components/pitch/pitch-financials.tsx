import { TrendingUp } from "lucide-react"

export function PitchFinancials() {
  const projections = [
    {
      year: "2025",
      users: "50K",
      volume: "$25M",
      revenue: "$3.6M",
      costs: "$4.5M",
      netIncome: "-$900K",
    },
    {
      year: "2026",
      users: "250K",
      volume: "$125M",
      revenue: "$18M",
      costs: "$12M",
      netIncome: "$6M",
    },
    {
      year: "2027",
      users: "500K",
      volume: "$250M",
      revenue: "$36M",
      costs: "$20M",
      netIncome: "$16M",
    },
  ]

  return (
    <section className="border-b bg-muted/20 py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Financial Projections</h2>
            <p className="text-lg text-muted-foreground">Path to profitability with strong growth trajectory</p>
          </div>

          <div className="mb-12 overflow-x-auto">
            <table className="w-full rounded-lg border bg-card">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-4 text-left text-sm font-semibold">Year</th>
                  <th className="p-4 text-left text-sm font-semibold">Users</th>
                  <th className="p-4 text-left text-sm font-semibold">Monthly Volume</th>
                  <th className="p-4 text-left text-sm font-semibold">Revenue</th>
                  <th className="p-4 text-left text-sm font-semibold">Costs</th>
                  <th className="p-4 text-left text-sm font-semibold">Net Income</th>
                </tr>
              </thead>
              <tbody>
                {projections.map((projection, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="p-4 font-semibold">{projection.year}</td>
                    <td className="p-4 text-sm">{projection.users}</td>
                    <td className="p-4 text-sm">{projection.volume}</td>
                    <td className="p-4 text-sm text-primary">{projection.revenue}</td>
                    <td className="p-4 text-sm text-muted-foreground">{projection.costs}</td>
                    <td
                      className={`p-4 text-sm font-semibold ${
                        projection.netIncome.startsWith("-") ? "text-destructive" : "text-accent"
                      }`}
                    >
                      {projection.netIncome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-6 text-xl font-bold">Revenue Breakdown (Year 3)</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <span className="text-sm">Transaction fees (0.5%)</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">$15M</div>
                    <div className="text-xs text-muted-foreground">42%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-accent" />
                    <span className="text-sm">Yield spread (1%)</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">$12M</div>
                    <div className="text-xs text-muted-foreground">33%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-primary/60" />
                    <span className="text-sm">Virtual cards</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">$6M</div>
                    <div className="text-xs text-muted-foreground">17%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-accent/60" />
                    <span className="text-sm">Premium subscriptions</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">$3M</div>
                    <div className="text-xs text-muted-foreground">8%</div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Total Revenue</span>
                    <span className="text-xl font-bold text-primary">$36M</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-6 text-xl font-bold">Key Assumptions</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>$500 average transaction size</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>2x transactions per month per user</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>0.5% transaction fee</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>1% yield spread on DeFi earnings</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>40% gross margin (SaaS-like)</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>Break-even in 18 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>50% net margin at scale (Year 3)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
