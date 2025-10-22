"use client"

import { useState } from "react"
import { Button } from "~/components/ui/button"
import { ThemeToggle } from "~/components/theme-toggle"
import { DemoModal } from "~/components/demo-modal"
import Link from "next/link"

export function Header() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">R</span>
            </div>
            <span className="text-xl font-bold">RemitNow</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="/#market"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Market
            </Link>
            <Link
              href="/pitch"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pitch
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button size="sm" onClick={() => setShowDemo(true)}>
              See Demo
            </Button>
          </div>
        </div>
      </header>

      <DemoModal open={showDemo} onOpenChange={setShowDemo} />
    </>
  )
}
