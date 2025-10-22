import { Code, Shield, Zap } from "lucide-react"

export function PitchTechnology() {
  const integrations = [
    { name: "Kamino Finance", function: "DeFi yields", status: "Live" },
    { name: "Circle CCTP", function: "Cross-chain", status: "Live" },
    { name: "Jupiter", function: "Token swaps", status: "Live" },
    { name: "Lithic", function: "Virtual cards", status: "Live" },
    { name: "Telegram", function: "Mobile bot", status: "Live" },
  ]

  return (
    <section className="border-b py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Technology Stack</h2>
            <p className="text-lg text-muted-foreground">Built on Solana for speed, security, and scalability</p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-center font-semibold">Solana Layer 1</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 400ms block time</li>
                <li>• 65,000 TPS capacity</li>
                <li>• {"<"}$0.001 transaction fees</li>
                <li>• 350M+ total transactions</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-center font-semibold">Smart Contracts</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Anchor Framework (Rust)</li>
                <li>• PDA-based security</li>
                <li>• 100% test coverage</li>
                <li>• Audited code (planned)</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-center font-semibold">Security</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Non-custodial wallets</li>
                <li>• Member permissions</li>
                <li>• Checked arithmetic</li>
                <li>• Authority controls</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border bg-muted/50 p-8">
            <h3 className="mb-6 text-center text-xl font-bold">Key Integrations</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="pb-3 text-left text-sm font-semibold">Partner</th>
                    <th className="pb-3 text-left text-sm font-semibold">Function</th>
                    <th className="pb-3 text-left text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {integrations.map((integration, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-3 text-sm">{integration.name}</td>
                      <td className="py-3 text-sm text-muted-foreground">{integration.function}</td>
                      <td className="py-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {integration.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
