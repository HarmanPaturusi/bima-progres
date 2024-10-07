"use client";

import { PaketType } from "@/lib/type";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
