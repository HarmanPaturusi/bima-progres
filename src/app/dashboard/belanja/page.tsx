import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getBarjas, getPaketBelanja } from "@/lib/data";
import { EllipsisVertical, SlidersHorizontal } from "lucide-react";
import { DaftarProgresPaket } from "./daftar-paket";

export default async function Page() {
  const dataBarjas = await getBarjas();
  const dataPaket = await getPaketBelanja();
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-6 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">
            Realisasi Belanja
          </h1>
        </div>
        {/* <div className="grid grid-cols-1"> */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            <div className="flex items-center gap-2">
              <CarouselItem className="basis-auto">
                <SlidersHorizontal className="h-4 w-4" />
              </CarouselItem>
              {dataBarjas.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/4 lg:basis-auto"
                >
                  <Button variant="outline" className="rounded-full">
                    {item.keterangan}
                  </Button>
                </CarouselItem>
              ))}
            </div>
          </CarouselContent>
        </Carousel>
        {/* </div> */}
        <div className="flex justify-center gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
            <DaftarProgresPaket data={dataPaket} />
          </div>
        </div>
      </main>
    </>
  );
}
