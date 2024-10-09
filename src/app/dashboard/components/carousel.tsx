"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  RealisasiBelanja,
  RealisasiFisikDinas,
  RealisasiKeuDinas,
  RealisasiPadDinas,
  RealisasiPendapatan,
} from "./chart-realisasi";
export function CarouselDinas() {
  return (
    <>
      <div className="grid grid-cols-1">
        <Carousel
          className="md:hidden w-full max-w-xs"
          // plugins={[
          //   Autoplay({
          //     delay: 3000,
          //   }),
          // ]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <RealisasiFisikDinas />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <RealisasiPadDinas />
              </div>
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious />
        <CarouselNext /> */}
        </Carousel>
      </div>
      <div className="hidden md:grid grid-cols-2 mx-auto items-center gap-6">
        <RealisasiFisikDinas />
        <RealisasiPadDinas />
      </div>
    </>
  );
}
