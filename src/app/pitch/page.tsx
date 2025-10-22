import { Header } from "~/components/header"
import { Footer } from "~/components/footer"
import { PitchHero } from "~/components/pitch/pitch-hero"
import { PitchProblem } from "~/components/pitch/pitch-problem"
import { PitchSolution } from "~/components/pitch/pitch-solution"
import { PitchTechnology } from "~/components/pitch/pitch-technology"
import { PitchBusiness } from "~/components/pitch/pitch-business"
import { PitchMarket } from "~/components/pitch/pitch-market"
import { PitchCompetitive } from "~/components/pitch/pitch-competitive"
import { PitchGTM } from "~/components/pitch/pitch-gtm"
import { PitchFinancialsEnhanced } from "~/components/pitch/pitch-financials-enhanced"
import { PitchRegulatory } from "~/components/pitch/pitch-regulatory"
import { PitchTraction } from "~/components/pitch/pitch-traction"

export default function PitchPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PitchHero />
        <PitchProblem />
        <PitchSolution />
        <PitchTechnology />
        <PitchBusiness />
        <PitchMarket />
        <PitchCompetitive />
        <PitchGTM />
        <PitchFinancialsEnhanced />
        <PitchRegulatory />
        <PitchTraction />
      </main>
      <Footer />
    </div>
  )
}
