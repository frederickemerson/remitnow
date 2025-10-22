"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog"

interface DemoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl">RemitNow Demo</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full bg-muted rounded-b-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="RemitNow Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
