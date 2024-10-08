"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ShoppingCart } from "lucide-react";
export function CarouselDinas() {
  return (
    <Carousel
      className="w-full max-w-xs"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="flex mx-auto justify-center">
            <div className="grid grid-cols-1">
              <Card className="max-w-xs w-svw">
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <div>Realisasi Belanja</div>
                    <ShoppingCart className="h-4 w-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-auto items-center justify-center pb-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                      <div className="text-sm text-muted-foreground">Fisik</div>
                      <div className="text-muted-foreground">
                        <span className="text-4xl font-semibold text-foreground">
                          {56.4}
                        </span>
                        %
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm text-muted-foreground">
                        Keuangan
                      </div>
                      <div className="text-muted-foreground">
                        <span className="text-4xl font-semibold text-foreground">
                          {56.4}
                        </span>
                        %
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
