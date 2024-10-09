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
import { RowDataPacket } from "mysql2";
export function CarouselDinas({ belanja, pendapatan }: { belanja: { bobotF: number, bobotK: number }, pendapatan: { items: RowDataPacket[], total: number } }) {
  return (
    <>
      <div className="grid grid-cols-1">
        <Carousel
          className="md:hidden w-full md:max-w-xs"
        // plugins={[
        //   Autoplay({
        //     delay: 3000,
        //   }),
        // ]}
        >
          <CarouselContent>
            <CarouselItem>
              <RealisasiFisikDinas data={belanja} />
            </CarouselItem>
            <CarouselItem>
              <RealisasiPadDinas data={pendapatan} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="hidden md:grid grid-cols-2 mx-auto items-center gap-6">
        <RealisasiFisikDinas data={belanja} />
        <RealisasiPadDinas data={pendapatan} />
      </div>
    </>
  );
}
