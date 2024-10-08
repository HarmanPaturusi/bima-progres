import { CarouselDinas } from "./components/carousel";
import {
  RealisasiBelanja,
  RealisasiPendapatan,
} from "./components/chart-realisasi";
export default function Page() {
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Dasbor</h1>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="grid grid-cols-1 px-6">
            <CarouselDinas />
            {/* <RealisasiBelanja />
            <RealisasiPendapatan /> */}
            <div>Test</div>
          </div>
        </div>
      </main>
    </>
  );
}
