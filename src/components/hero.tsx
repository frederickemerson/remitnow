import { Badge } from "~/components/ui/badge"
import { Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-background py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 px-3 py-1.5 animate-in fade-in slide-in-from-bottom-2 duration-700"
          >
            <Zap className="h-3.5 w-3.5" />
            <span>Powered by Solana</span>
          </Badge>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-3 duration-800">
            Send Money Home.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Build Wealth Together.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl animate-in fade-in slide-in-from-bottom-4 duration-900">
            The first remittance app that turns every transfer into an investment opportunity.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>$700B Global Market</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>400ms Settlement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-chart-3" />
              <span>ZK-Privacy KYC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
    </section>
  )
}
