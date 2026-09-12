import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalCarouselProps {
  children: React.ReactNode;
  className?: string;
  itemGapClass?: string;
  showBottomNav?: boolean;
  showSideArrows?: boolean;
}

export function HorizontalCarousel({
  children,
  className = "",
  itemGapClass = "gap-4 md:gap-5",
  showBottomNav = true,
  showSideArrows = false,
}: HorizontalCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(1);
  const [totalItems, setTotalItems] = useState(() => React.Children.count(children));
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const checkScrollability = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const atStart = scrollLeft <= 8;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 8;

    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);

    const childrenElements = Array.from(el.children) as HTMLElement[];
    const total = childrenElements.length;
    if (total === 0) return;
    setTotalItems(total);

    if (atEnd) {
      setCurrentVisibleIndex(total);
      return;
    }

    const viewRight = scrollLeft + clientWidth;
    let maxVisibleIdx = 1;

    for (let i = 0; i < total; i++) {
      const child = childrenElements[i];
      const childLeft = child.offsetLeft;
      const childWidth = child.offsetWidth;
      // If at least 35% of the card is visible from the right edge
      if (childLeft + childWidth * 0.35 <= viewRight) {
        maxVisibleIdx = i + 1;
      }
    }

    if (atStart) {
      let countInView = 0;
      for (let i = 0; i < total; i++) {
        const child = childrenElements[i];
        if (child.offsetLeft + child.offsetWidth * 0.35 <= clientWidth) {
          countInView = i + 1;
        }
      }
      maxVisibleIdx = Math.max(1, countInView);
    }

    setCurrentVisibleIndex(Math.min(total, Math.max(1, maxVisibleIdx)));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollability();
    // Re-check shortly after mount in case layout paints with dynamic widths
    const timer = setTimeout(checkScrollability, 100);

    el.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);

    return () => {
      clearTimeout(timer);
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability, children]);

  // Step-by-step scrolling (one card per click)
  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const childrenElements = Array.from(el.children) as HTMLElement[];

    let step = el.clientWidth * 0.75;
    if (childrenElements.length > 1) {
      const diff = childrenElements[1].offsetLeft - childrenElements[0].offsetLeft;
      if (diff > 0) {
        step = diff;
      }
    }

    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  // Mouse Drag-to-scroll support for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsMouseDown(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftStart(el.scrollLeft);
    setHasMoved(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 4) {
      setHasMoved(true);
    }
    el.scrollLeft = scrollLeftStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    // If the user was dragging on desktop, prevent triggering card clicks
    if (hasMoved) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
    <div className={`relative w-full group/carousel ${className}`}>
      {/* Scrollable Track */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onClickCapture={handleClickCapture}
        className={`flex ${itemGapClass} overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-2 pt-1 sm:mx-0 sm:px-0 scroll-smooth select-none cursor-grab active:cursor-grabbing`}
      >
        {children}
      </div>

      {/* Optional Floating Left Arrow (desktop) */}
      {showSideArrows && (
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
          className={`hidden md:grid absolute md:-left-5 top-1/2 -translate-y-1/2 z-30 place-items-center size-11 rounded-full border border-border/80 bg-background/90 hover:bg-surface-elevated text-foreground backdrop-blur-md shadow-xl hover:border-brand/50 hover:scale-105 active:scale-95 transition-all duration-200 ${canScrollLeft
              ? "opacity-90 hover:opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
            }`}
        >
          <ChevronLeft className="size-5 text-foreground" />
        </button>
      )}

      {/* Optional Floating Right Arrow (desktop) */}
      {showSideArrows && (
        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll right"
          className={`hidden md:grid absolute md:-right-5 top-1/2 -translate-y-1/2 z-30 place-items-center size-11 rounded-full border border-border/80 bg-background/90 hover:bg-surface-elevated text-foreground backdrop-blur-md shadow-xl hover:border-brand/50 hover:scale-105 active:scale-95 transition-all duration-200 ${canScrollRight
              ? "opacity-90 hover:opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
            }`}
        >
          <ChevronRight className="size-5 text-foreground" />
        </button>
      )}

      {/* Bottom Navigation Control: <- 3/6 -> */}
      {showBottomNav && totalItems > 1 && (
        <div className="flex items-center justify-center mt-5">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-border/70 bg-surface/80 backdrop-blur-md shadow-sm hover:border-border transition-colors">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous item"
              className="p-1 rounded-full text-foreground/80 hover:text-foreground hover:bg-foreground/10 disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-90 cursor-pointer"
            >
              <ChevronLeft className="size-4" />
            </button>

            <span className="font-mono text-xs font-medium text-muted-foreground select-none px-1 tracking-wider flex items-center">
              <span className="text-foreground font-semibold">{currentVisibleIndex}</span>
              <span className="text-muted-foreground/50 mx-1">/</span>
              <span>{totalItems}</span>
            </span>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next item"
              className="p-1 rounded-full text-foreground/80 hover:text-foreground hover:bg-foreground/10 disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-90 cursor-pointer"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

