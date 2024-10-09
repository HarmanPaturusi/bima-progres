import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { CarouselDinas } from "./components/carousel";
import { EllipsisVertical } from "lucide-react";
import { TableProgram } from "./components/table-program";
import { getPendapatan, getRekapDinas, getRekapProgram } from "@/lib/data";

export default async function Page() {
  const ProgramRekap = await getRekapProgram()
  const BelanjaRekap = await getRekapDinas()
  const PadReakp = await getPendapatan()
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-6 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Ringkasan</h1>
        </div>
        <div className="flex justify-center gap-6">
          <CarouselDinas belanja={BelanjaRekap} pendapatan={PadReakp} />
        </div>
        <TableProgram data={ProgramRekap} />

      </main>
    </>
  );
}
