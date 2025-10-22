import { Card } from "~/components/ui/card"
import { Wallet, ArrowLeftRight, TrendingUp, CreditCard, QrCode, Lock } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Wallet,
      title: "Easy On-Ramp",
      description:
        "Buy stablecoins instantly via remittances. Convert fiat to USDC/USDT seamlessly through integrated payment rails.",
      benefit: "Instant conversion",
    },
    {
      icon: QrCode,
      title: "QR & Wallet Transfers",
      description:
        "Send money via QR codes or wallet addresses. Save contacts for quick repeat transfers. No bank details needed.",
      benefit: "Simple & fast",
    },
    {
      icon: ArrowLeftRight,
      title: "Stablecoin Swaps",
      description: "Swap between USDC, USDT, and other stablecoins at the best rates instantly via Jupiter aggregator.",
      benefit: "Best rates guaranteed",
    },
    {
      icon: TrendingUp,
      title: "Yield Investing",
      description:
        "Earn 7-20% APY through Kamino delta-neutral strategies. Your funds stay accessible while generating passive income.",
      benefit: "7-20% APY",
    },
    {
      icon: CreditCard,
      title: "Card Issuance",
      description:
        "Get physical and virtual cards via Lithic integration. Spend your crypto anywhere Visa is accepted, anytime.",
      benefit: "Global acceptance",
    },
    {
      icon: Lock,
      title: "ZK-Privacy KYC",
      description:
        "Zero-knowledge proofs ensure compliance without exposing your personal data. Fully compliant, completely private.",
      benefit: "Privacy preserved",
    },
  ]

  return (
    <section id="features" className="border-b py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            Everything You Need in One <span className="text-primary">Superapp</span>
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            A complete financial ecosystem built for Asia and Africa, powered by Solana&apos;s lightning-fast blockchain.
            Send, save, earn, and spend—all in one place.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                <feature.icon className="h-6 w-6 text-primary transition-transform group-hover:rotate-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                {feature.benefit}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
