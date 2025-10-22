import { Button } from "~/components/ui/button"
import { ArrowRight, TrendingUp, Zap, DollarSign } from "lucide-react"

export function PitchHero() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="font-medium">Investor Pitch Deck</span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            Revolutionizing the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">$700B</span>{" "}
            Remittance Market
          </h1>

          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Solana-powered remittances with 12x cheaper fees, instant transfers, and 7-20% APY yields
          </p>

          <div className="mb-12 grid gap-6 sm:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <div className="rounded-lg border bg-card p-6 transition-all hover:scale-105 hover:shadow-lg">
              <div className="mb-2 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold">12x</div>
              <div className="text-sm text-muted-foreground">Cheaper Fees</div>
              <div className="mt-1 text-xs text-muted-foreground">0.5% vs 6-8%</div>
            </div>

            <div className="rounded-lg border bg-card p-6 transition-all hover:scale-105 hover:shadow-lg">
              <div className="mb-2 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold">7-20%</div>
              <div className="text-sm text-muted-foreground">APY Yields</div>
              <div className="mt-1 text-xs text-muted-foreground">Via Kamino DeFi</div>
            </div>

            <div className="rounded-lg border bg-card p-6 transition-all hover:scale-105 hover:shadow-lg">
              <div className="mb-2 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold">400ms</div>
              <div className="text-sm text-muted-foreground">Settlement</div>
              <div className="mt-1 text-xs text-muted-foreground">Instant on Solana</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in duration-1000 delay-500">
            <Button size="lg" className="group">
              Schedule a Meeting
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Download Deck
            </Button>
          </div>

          <div className="mt-8 text-sm text-muted-foreground animate-in fade-in duration-1000 delay-700">
            Seeking $2M Seed Round • $10M Pre-Money Valuation
          </div>
        </div>
      </div>
    </section>
  )
}
