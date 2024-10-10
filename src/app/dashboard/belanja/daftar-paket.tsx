// "use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { formatCurrency } from "@/lib/utils";
import { EllipsisVertical, Timer, CirclePause, CircleHelp, CircleCheck, CircleEllipsis } from "lucide-react";
import { RowDataPacket } from "mysql2";
import { IconFase } from '@/components/icons'
import { getPaketBelanja } from "@/lib/data";

export async function DaftarProgresPaket({
  bj, fase
}: {
  bj?: string,
  fase?: string,
}) {
  const data = await getPaketBelanja(bj, fase)
  if (!data.length) {
    return <div className="w-full text-center">NO DATA</div>
  } else {
    return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
      {data.map((paket, index) => (
        <Card className="shadow-none" key={index}>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1">
              <div className="aspect-video bg-muted w-full rounded-lg mb-2"></div>
              <div className="text-sm font-medium truncate">{paket.nama_paket}</div>
              <div className="text-xs text-muted-foreground truncate">
                {paket.sub_bl}
              </div>
              <div className="flex items-baseline justify-between">
                <div className="text-sm">{formatCurrency(paket.nilai)}</div>
                <div className="flex mt-2">
                  <div className="text-sm w-14 text-center bg-primary text-primary-foreground">{paket.bobotF}%</div>
                  <div className="text-sm w-14 text-center bg-secondary text-secondary-foreground">{paket.bobotK}%</div>
                </div>
                {/* <div className="text-sm">fase: {paket.tahap}</div>
            <div className="text-sm">{paket.barjas}</div> */}
              </div>
            </div>
          </CardContent>
          <CardFooter className="grid gap-1">
            {/* <div>Kegiatan {++index}</div>
                              <div>Sub Kegiatan {++index}</div>
                              <div>Akun Belanja {++index}</div> */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div className="text-muted-foreground text-sm">
                  {paket.program_alias}
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IconFase id={paket.tahap_id} />
                  </TooltipTrigger>
                  <TooltipContent>Fase {paket.tahap}</TooltipContent>
                </Tooltip>
                <EllipsisVertical className="w-4 h-4" />
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  }
}
