"use client";

import { PaketType } from "@/lib/type";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Blocks, CircleDollarSign } from "lucide-react";
import { getBobot } from "../../lib/utils";
export function TabelPaket({ data }: { data: PaketType[] }) {
  return (
    <Table className="ps-8 table-fixed">
      <TableBody>
        {data.map((paket) => (
          <TableRow key={paket.id_paket}>
            <TableCell className="w-[20px]">[-]</TableCell>
            <TableCell className="w-1/2">{paket.nama}</TableCell>
            <TableCell className="">
              {paket.pagu >= 1000000000
                ? (paket.pagu / 1000000000).toFixed(0) + " M"
                : (paket.pagu / 1000000).toFixed(0) + " jt"}
            </TableCell>
            <TableCell>
              <CircleDollarSign className="h-4 w-4" />
              {getBobot(paket.nilai, paket.realK, 2)}%
            </TableCell>
            <TableCell>
              <Blocks className="h-4 w-4" />
              {paket.bobotF}%
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
