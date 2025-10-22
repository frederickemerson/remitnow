import { Globe, Users, Target } from "lucide-react"

export function PitchMarket() {
  return (
    <section className="border-b py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Market Opportunity</h2>
            <p className="text-lg text-muted-foreground">Massive addressable market with strong tailwinds</p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="mb-2 text-4xl font-bold text-primary">$45B</div>
              <div className="mb-2 font-semibold">TAM</div>
              <div className="text-sm text-muted-foreground">
                Total Addressable Market
                <br />
                Global remittance fees paid annually
              </div>
            </div>

            <div className="rounded-lg border bg-card p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-accent/10 p-3">
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="mb-2 text-4xl font-bold text-accent">$15B</div>
              <div className="mb-2 font-semibold">SAM</div>
              <div className="text-sm text-muted-foreground">
                Serviceable Addressable Market
                <br />
                Digital-native remittances in key corridors
              </div>
            </div>

            <div className="rounded-lg border bg-card p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="mb-2 text-4xl font-bold text-primary">$450M</div>
              <div className="mb-2 font-semibold">SOM</div>
              <div className="text-sm text-muted-foreground">
                Serviceable Obtainable Market
                <br />
                1% of SAM in 3 years
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-lg border bg-muted/50 p-8">
            <h3 className="mb-6 text-center text-xl font-bold">Target Demographics</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold">Primary: Migrant Workers (25-45)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Tech-savvy millennials/Gen Z</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Sending $200-$500/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Southeast Asia, Latin America, Africa</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold">Secondary: Small Businesses</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>Cross-border payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>Contractor remittances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>E-commerce settlements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-8">
            <h3 className="mb-6 text-center text-xl font-bold">Geographic Focus (Phase 1)</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { country: "Philippines", volume: "Largest in SEA" },
                { country: "Indonesia", volume: "4th globally" },
                { country: "Vietnam", volume: "Fast-growing" },
                { country: "Mexico", volume: "$60B/year" },
                { country: "India", volume: "$111B/year" },
              ].map((market, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-muted/50 p-4 text-center transition-all hover:scale-105 hover:shadow-lg"
                >
                  <div className="mb-1 font-semibold">{market.country}</div>
                  <div className="text-xs text-muted-foreground">{market.volume}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
