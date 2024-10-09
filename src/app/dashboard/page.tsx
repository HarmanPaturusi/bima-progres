import { CarouselDinas } from "./components/carousel";
import {
  RealisasiBelanja,
  RealisasiPendapatan,
} from "./components/chart-realisasi";
export default function Page() {
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-6 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Ringkasan</h1>
        </div>
        <div className="flex justify-center gap-6 md:bg-muted md:py-2">
          <CarouselDinas />
        </div>
        <div>Test</div>
      </main>
    </>
  );
}
