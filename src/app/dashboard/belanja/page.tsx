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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FilterPaket } from "./filter";

export default async function Page({
  searchParams
}: {
  searchParams?: {
    bj?: string;
    fase?: string;
  }
}) {
  const bj = searchParams?.bj || ''
  const fase = searchParams?.fase || ''

  const dataBarjas = await getBarjas();
  // const dataPaket = await getPaketBelanja();
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-6 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">
            Realisasi Belanja
          </h1>
        </div>

        <FilterPaket dataBarjas={dataBarjas} />
        <div className="flex justify-center gap-6">
          <ScrollArea className="h-svh w-full md:pe-4 lg:pe-6">

            <DaftarProgresPaket bj={bj} fase={fase} />

          </ScrollArea>
        </div>
      </main>
    </>
  );
}
