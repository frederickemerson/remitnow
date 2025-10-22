import { Card } from "~/components/ui/card"
import { LogIn, Wallet, TrendingUp, Users } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: LogIn,
      step: "01",
      title: "Sign Up & Verify",
      description: "Create your account with privacy-preserving ZK-KYC. Your data stays secure and private.",
    },
    {
      icon: Wallet,
      step: "02",
      title: "Create Shared Pot",
      description: "Deposit SOL and convert to USDC. Set up shared access for family members.",
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Earn Yields",
      description: "Your pot automatically earns 7-20% APY through Kamino DeFi strategies.",
    },
    {
      icon: Users,
      step: "04",
      title: "Spend & Share",
      description: "Family members can spend from the pot. Earnings auto-distribute to everyone.",
    },
  ]

  return (
    <section id="how-it-works" className="border-b py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">How It Works</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Get started in minutes. No complex crypto knowledge required.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/20">{step.step}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </Card>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 translate-x-full bg-border lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
