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
      <Carousel
        className="lg:hidden w-full max-w-xs"
        // plugins={[
        //   Autoplay({
        //     delay: 3000,
        //   }),
        // ]}
      >
        <CarouselContent className="p-6">
          <CarouselItem>
            <div className="p-1">
              <RealisasiFisikDinas />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <RealisasiKeuDinas />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <RealisasiPadDinas />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="hidden lg:grid grid-cols-2 mx-auto items-center gap-6">
        <RealisasiBelanja />
        <RealisasiPendapatan />
      </div>
    </>
  );
}
