import { DollarSign, TrendingUp, CreditCard, Star } from "lucide-react"

export function PitchBusiness() {
  return (
    <section className="border-b bg-muted/20 py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Business Model</h2>
            <p className="text-lg text-muted-foreground">Multiple revenue streams with strong unit economics</p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-center font-semibold">Transaction Fees</h3>
              <div className="mb-2 text-center text-2xl font-bold text-primary">0.5%</div>
              <p className="text-center text-xs text-muted-foreground">Primary revenue on deposits</p>
            </div>

            <div className="rounded-lg border bg-card p-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-accent/10 p-3">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="mb-2 text-center font-semibold">Yield Spread</h3>
              <div className="mb-2 text-center text-2xl font-bold text-accent">1-2%</div>
              <p className="text-center text-xs text-muted-foreground">Platform keeps from yields</p>
            </div>

            <div className="rounded-lg border bg-card p-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-center font-semibold">Card Fees</h3>
              <div className="mb-2 text-center text-2xl font-bold text-primary">0.5%</div>
              <p className="text-center text-xs text-muted-foreground">Interchange revenue</p>
            </div>

            <div className="rounded-lg border bg-card p-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-accent/10 p-3">
                  <Star className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="mb-2 text-center font-semibold">Premium</h3>
              <div className="mb-2 text-center text-2xl font-bold text-accent">$5-10</div>
              <p className="text-center text-xs text-muted-foreground">Monthly subscriptions</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-6 text-xl font-bold">Unit Economics</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Average transaction</span>
                  <span className="font-mono font-semibold">$500</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Transaction fee (0.5%)</span>
                  <span className="font-mono font-semibold">$2.50</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Frequency</span>
                  <span className="font-mono font-semibold">2x/month</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Yield revenue</span>
                  <span className="font-mono font-semibold">$1/month</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Card revenue</span>
                  <span className="font-mono font-semibold">$0.50/month</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-semibold">Total ARPU</span>
                  <span className="font-mono text-lg font-bold text-primary">$6.50/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Customer acquisition</span>
                  <span className="font-mono text-sm">$15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-semibold">Payback period</span>
                  <span className="font-mono font-semibold text-accent">2.3 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-semibold">LTV (3 years)</span>
                  <span className="font-mono font-semibold text-accent">$234</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-6 text-xl font-bold">Year 3 Projections</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Total users</span>
                  <span className="font-mono font-semibold">500,000</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Monthly active</span>
                  <span className="font-mono font-semibold">350,000</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Transaction volume</span>
                  <span className="font-mono font-semibold">$350M/month</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Transaction revenue</span>
                  <span className="font-mono font-semibold">$1.75M/month</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Yield revenue</span>
                  <span className="font-mono font-semibold">$0.5M/month</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">Card revenue</span>
                  <span className="font-mono font-semibold">$0.25M/month</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-semibold">Monthly revenue</span>
                  <span className="font-mono text-lg font-bold text-primary">$2.5M</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Annual run rate</span>
                  <span className="font-mono text-lg font-bold text-accent">$30M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
