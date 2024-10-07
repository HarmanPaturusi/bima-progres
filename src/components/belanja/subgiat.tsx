"use client";
import { PaketType, SubGiatType } from "@/lib/type";
import { CircleChevronRight, CircleChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { useState } from "react";
import { AkunBelanjaType, SubsBelanjaType } from "@/lib/data";
import { AkunBelanja } from "./akun";
export function SubGiatBelanja({
  data,
  akuns,
  subs,
  pakets,
}: {
  data: SubGiatType;
  akuns: AkunBelanjaType[];
  subs: SubsBelanjaType[];
  pakets: PaketType[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="mb-3">
      <div className="flex flex-col md:flex-row md:gap-2 text-sm">
        <div>{data.kode.replace("X.XX", "1.03")}</div>
        <div className="flex items-center mb-3 gap-2">
          {data.nama}
          <CollapsibleTrigger>
            {open ? (
              <CircleChevronDown className="h-5 w-h-5" />
            ) : (
              <CircleChevronRight className="h-5 w-h-5" />
            )}
          </CollapsibleTrigger>
        </div>
      </div>
      <CollapsibleContent>
        {akuns
          .filter((dataAkun) => dataAkun.subgiat_id === data.id_subgiat)
          .map((akun) => (
            <AkunBelanja
              key={akun.akun_bl_id}
              data={akun}
              subs={subs}
              pakets={pakets}
            />
          ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
