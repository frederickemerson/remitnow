import { AlertCircle, Clock, TrendingDown, Users } from "lucide-react"

export function PitchProblem() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Excessive Fees",
      stat: "6-8%",
      description: "Average remittance fees",
      details: ["Western Union: 6.5% average", "MoneyGram: 5.8% average", "Bank transfers: 7-12%"],
    },
    {
      icon: Clock,
      title: "Slow Settlement",
      stat: "2-5 days",
      description: "Traditional transfer time",
      details: ["Cross-border ACH: 3-5 days", "SWIFT: 1-4 days", "Regional services: 1-2 days"],
    },
    {
      icon: AlertCircle,
      title: "Poor Yields",
      stat: "0.01%",
      description: "Traditional bank interest",
      details: ["Traditional banks: 0.01-0.5% APY", "Remittance accounts: 0%", "No investment options"],
    },
    {
      icon: Users,
      title: "Limited Access",
      stat: "1.7B",
      description: "Adults globally unbanked",
      details: ["No access to credit", "No savings products", "No investment tools"],
    },
  ]

  return (
    <section className="border-b py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">The Problem</h2>
            <p className="text-lg text-muted-foreground">
              Traditional remittances are broken, costing families{" "}
              <span className="font-bold text-foreground">$45B annually</span> in fees
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group rounded-lg border bg-card p-6 transition-all hover:scale-105 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-full bg-destructive/10 p-3">
                    <problem.icon className="h-6 w-6 text-destructive" />
                  </div>
                </div>
                <div className="mb-2 text-center text-3xl font-bold">{problem.stat}</div>
                <div className="mb-1 text-center font-semibold">{problem.title}</div>
                <div className="mb-4 text-center text-sm text-muted-foreground">{problem.description}</div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {problem.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-lg border bg-muted/50 p-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">$700B</div>
                <div className="text-sm text-muted-foreground">Global remittances per year</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">250M</div>
                <div className="text-sm text-muted-foreground">Active senders worldwide</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-destructive">$45B</div>
                <div className="text-sm text-muted-foreground">Lost to fees annually</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
