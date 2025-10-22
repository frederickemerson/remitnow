import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Badge } from "~/components/ui/badge"
import { ArrowRight, Github } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-b py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border bg-card p-8 text-center shadow-lg md:p-12">
            <Badge variant="secondary" className="mb-6">
              Solana Hackathon Entry
            </Badge>

            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">Join the Revolution</h2>

            <p className="mx-auto mb-8 max-w-xl text-pretty text-lg text-muted-foreground">
              Be among the first to experience the future of remittances. Turn every transfer into an investment
              opportunity.
            </p>

            <form className="mx-auto mb-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit" className="gap-2">
                Get Early Access
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>✓ No credit card required</span>
              <span>✓ Free to start</span>
              <span>✓ Cancel anytime</span>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 border-t pt-8">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Github className="h-4 w-4" />
                Open Source on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
