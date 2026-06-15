"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export interface LightboxImage {
  src: string
  alt: string
  caption?: string
}

interface LightboxProps {
  images: LightboxImage[]
  initialIndex: number | null
  onClose: () => void
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex ?? 0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const isOpen = initialIndex !== null

  useEffect(() => {
    if (initialIndex !== null) setCurrentIndex(initialIndex)
  }, [initialIndex])

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, goNext, goPrev])

  const current = images[currentIndex]

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl w-full p-0 bg-black border-0 overflow-hidden">
        <DialogTitle className="sr-only">
          {current?.alt ?? "Image Gallery"}
        </DialogTitle>

        <div
          className="relative select-none"
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart === null) return
            const delta = e.changedTouches[0].clientX - touchStart
            if (Math.abs(delta) > 50) delta > 0 ? goPrev() : goNext()
            setTouchStart(null)
          }}
        >
          <div className="relative w-full aspect-video bg-black">
            {current && (
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            )}
          </div>

          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
          >
            <ChevronRight className="size-5" />
          </button>

          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute top-3 right-3 size-9 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
          >
            <X className="size-4" />
          </button>

          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
            {current?.caption && (
              <p className="text-white/90 text-sm">{current.caption}</p>
            )}
            <p className="text-white/60 text-sm ml-auto">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`size-1.5 rounded-full transition-all ${i === currentIndex ? "bg-white scale-125" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
