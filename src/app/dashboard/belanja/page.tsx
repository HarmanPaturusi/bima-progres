import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { EllipsisVertical, SlidersHorizontal } from "lucide-react";

export default async function Page() {
    return <>
        <main className="flex flex-1 flex-col gap-4 p-6 lg:gap-6 lg:p-6">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Realisasi Belanja</h1>
            </div>
            {/* <div className="grid grid-cols-1"> */}
            <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/4 lg:basis-1/12">
                            <div className="p-1">
                                <Card className="shadow-none rounded-full">
                                    <CardContent className="flex items-center justify-center p-1">
                                        <span className="text-base">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>
            {/* </div> */}
            <div className="flex justify-center gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
                    {Array.from({ length: 20 }).map((_, index) =>
                        <Card className="shadow-none">
                            <CardContent className="pt-6">
                                <div className="flex gap-3">
                                    <div className="aspect-square bg-muted h-40 w-40 rounded-lg"></div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">[#] kelompok {++index}</div>
                                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut officiis sapiente quod? Nesciunt blanditiis quis reprehenderit sapiente alias reiciendis voluptas!
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="grid gap-1">
                                {/* <div>Kegiatan {++index}</div>
                                <div>Sub Kegiatan {++index}</div>
                                <div>Akun Belanja {++index}</div> */}
                                <div className="flex justify-between">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-6 h-6 rounded-full bg-primary"></div>
                                        <div className="text-muted-foreground text-sm">Program {++index}</div>
                                    </div>
                                    <EllipsisVertical className="w-6 h-6" />
                                </div>
                            </CardFooter>
                        </Card>
                    )}
                </div>
            </div>
        </main >
    </>
}