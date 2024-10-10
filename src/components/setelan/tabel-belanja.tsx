import { getProgramBelanja } from "@/lib/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";


export async function TabelBelanja() {
    const data = await getProgramBelanja()
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Kode</TableHead>
                    <TableHead>Uraian</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((program) => (
                    <TableRow key={program.kode}>
                        <TableCell>{program.kode}</TableCell>
                        <TableCell>{program.nama}</TableCell>
                    </TableRow>
                )
                )}
            </TableBody>
        </Table>
    )
}
