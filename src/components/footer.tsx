import Link from "next/link"
import { Github, Twitter, MessageCircle, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">R</span>
              </div>
              <span className="text-xl font-bold">RemitNow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Turning remittances into wealth with Solana blockchain technology.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#market" className="text-muted-foreground transition-colors hover:text-foreground">
                  Market
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Whitepaper
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Connect</h3>
            <div className="flex gap-3">
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background transition-all hover:bg-accent hover:scale-110"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background transition-all hover:bg-accent hover:scale-110"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background transition-all hover:bg-accent hover:scale-110"
              >
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 RemitNow. Built on Solana. Open source and privacy-first.</p>
          <p className="flex items-center justify-center gap-1.5">
            Made by Frederick with <Heart className="h-4 w-4 fill-red-500 text-red-500 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  )
}
