'use client'

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { SlidersHorizontal } from "lucide-react"
import { RowDataPacket } from "mysql2"

import { useSearchParams, usePathname, useRouter } from "next/navigation"
export function FilterPaket({ dataBarjas }: { dataBarjas: RowDataPacket[] }) {
    const filterBarjas = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    function HandleFilter(term: string) {
        const params = new URLSearchParams(filterBarjas)
        if (term) {
            params.set('bj', term)
        } else {
            params.delete('bj')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (<Carousel className="w-full">
        <CarouselContent className="-ml-1">
            <CarouselItem className="basis-auto flex items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="p-2">
                            <SlidersHorizontal className="h-4 w-4" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle>Filter</SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </CarouselItem>
            {dataBarjas.map((item, index) => (
                <CarouselItem
                    key={index}
                    className="pl-1 basis-auto"
                >
                    <Button onClick={() => HandleFilter(item.id_barjas.toString())} variant="outline" className="rounded-full">
                        {item.keterangan}
                    </Button>
                </CarouselItem>
            ))}
        </CarouselContent>
    </Carousel>)
}