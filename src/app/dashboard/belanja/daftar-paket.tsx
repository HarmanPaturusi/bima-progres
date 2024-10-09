"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { EllipsisVertical } from "lucide-react";
import { RowDataPacket } from "mysql2";

export function DaftarProgresPaket({ data }: { data: RowDataPacket[] }) {
  return data.map((paket, index) => (
    <Card className="shadow-none">
      <CardContent className="pt-6">
        <div className="flex gap-3">
          <div className="aspect-square bg-muted h-20 w-20 rounded-lg"></div>
          <div>
            <div className="text-xs text-muted-foreground">
              [#] {paket.sub_bl}
            </div>
            <div className="text-sm">{paket.nama_paket}</div>
            <div className="text-sm">{formatCurrency(paket.nilai)}</div>
            <div className="text-sm">fase: {paket.tahap}</div>
            <div className="text-sm">{paket.barjas}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="grid gap-1">
        {/* <div>Kegiatan {++index}</div>
                              <div>Sub Kegiatan {++index}</div>
                              <div>Akun Belanja {++index}</div> */}
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-primary"></div>
            <div className="text-muted-foreground text-sm">
              {paket.program_alias}
            </div>
          </div>
          <EllipsisVertical className="w-6 h-6" />
        </div>
      </CardFooter>
    </Card>
  ));
}
