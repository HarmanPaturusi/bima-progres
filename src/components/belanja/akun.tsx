"use client";

import { CircleChevronRight, CircleChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { useState } from "react";
import { AkunBelanjaType, SubsBelanjaType } from "@/lib/data";
import { PaketType } from "@/lib/type";
import { TabelPaket } from "./tabel-paket";
export function AkunBelanja({
  data,
  subs,
  pakets,
}: {
  data: AkunBelanjaType;
  subs: SubsBelanjaType[];
  pakets: PaketType[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="mb-2">
      <div className="flex items-center mb-3 gap-2">
        <CollapsibleTrigger className="text-secondary-foreground">
          {open ? (
            <CircleChevronDown className="h-5 w-h-5" />
          ) : (
            <CircleChevronRight className="h-5 w-h-5" />
          )}
        </CollapsibleTrigger>
        <div className="flex flex-col md:flex-row md:gap-2 text-sm text-muted-foreground ">
          <div>{data.kode.replace("X.XX", "1.03")}</div>
          {data.nama}
        </div>
      </div>
      <CollapsibleContent className="ps-8">
        {subs
          .filter((datasub) => datasub.akun_bl_id === data.akun_bl_id)
          .map((sub) => (
            <div key={sub.id_subs_bl}>
              <div className="flex flex-row gap-2 text-sm text-muted-foreground">
                <div>[#]</div>
                <div>{sub.nama}</div>
              </div>
              <div className="ps-4">
                <TabelPaket
                  data={pakets.filter(
                    (paket) => paket.bl_id === sub.id_subs_bl
                  )}
                />
              </div>
            </div>
          ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
