import { Hero } from "~/components/hero"
import { ProblemSolution } from "~/components/problem-solution"
import { Features } from "~/components/features"
import { Roadmap } from "~/components/roadmap"
import { MetricsDashboard } from "~/components/metrics-dashboard"
import { MarketProof } from "~/components/market-proof"
import { HowItWorks } from "~/components/how-it-works"
import { SolanaSupport } from "~/components/solana-support"
import { CTASection } from "~/components/cta-section"
import { Header } from "~/components/header"
import { Footer } from "~/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <MarketProof />
        <HowItWorks />
        <MetricsDashboard />
        <Roadmap />
        <SolanaSupport />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
