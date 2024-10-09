'use client'

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getBobot } from "@/lib/utils"
import { RowDataPacket } from "mysql2"

export function TableProgram({ data }: { data: RowDataPacket[] }) {
    return <Table className="border-b max-w-2xl mx-auto">
        <TableHeader>
            <TableRow>
                <TableHead>PROGRAM</TableHead>
                <TableHead className="text-center"><div className="md:hidden">FIS</div><div className="hidden md:block">FISIK</div></TableHead>
                <TableHead className="text-center"><div className="md:hidden">KEU</div><div className="hidden md:block">KEU</div></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {data.map((program, index) => (
                <TableRow key={index}>
                    <TableCell className="flex flex-col">
                        <div className="md:hidden">{program.alias}</div>
                        <div className="hidden md:block">{program.nama}</div>
                        <div className="w-fit rounded-sm text-xs md:hidden" >{program.unit_alias}</div>
                        <div className="w-fit rounded-sm text-xs hidden md:block">{program.unit_nama}</div>
                    </TableCell>
                    <TableCell className="text-center text-lg font-medium">
                        {getBobot(program.nilai, program.realF)}
                        <span className="text-muted-foreground text-sm ms-1">%</span>
                    </TableCell>
                    <TableCell className="text-center text-lg font-medium">
                        {getBobot(program.nilai, program.realK)}
                        <span className="text-muted-foreground text-sm ms-1">%</span>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
}