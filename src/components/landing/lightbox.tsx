"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/landing-data";

interface LightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  open: boolean;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, open, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, open]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, prev, next]);

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStart(e.touches[0].clientX);
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setTouchStart(null);
  }

  const image = images[currentIndex];
  if (!image) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-black border-zinc-800 gap-0">
        <div
          className="relative flex items-center justify-center bg-black min-h-[50vh]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute top-3 right-3 z-50 p-2 bg-black/70 rounded-full text-white hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 z-50 p-2 bg-black/70 rounded-full text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 z-50 p-2 bg-black/70 rounded-full text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[75vh] object-contain"
            priority
          />

          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-[#fda720] w-6"
                      : "bg-white/30 w-1.5 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="px-5 py-3 bg-zinc-950 flex items-center justify-between">
          <p className="text-sm text-zinc-400">{image.alt}</p>
          <span className="text-xs text-zinc-600 font-mono">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
