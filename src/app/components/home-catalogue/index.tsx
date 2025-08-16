import * as React from "react"
import Image, { StaticImageData } from "next/image"
import MOCK from '../../../../public/mock-grocery.png'

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"

export interface Artwork {
    artist: string
    art: StaticImageData
}

export const works: Artwork[] = [
    {
        artist: "Ornella Binni",
        art: MOCK,
    },
    {
        artist: "Tom Byrom",
        art: MOCK,
    },
    {
        artist: "Vladimir Malyavko",
        art: MOCK,
    },
    {
        artist: "Ornella Bindsani",
        art: MOCK,
    },
    {
        artist: "Tom Bydarom",
        art: MOCK,
    },
    {
        artist: "Vladidasmir Malyavko",
        art: MOCK,
    },
]

const HomeCatalogue = () => {
    return (
        <ScrollArea className="w-full ">
            <div className="flex w-full gap-4">
                {works.map((artwork) => (
                    <Card className="sm:w-[220px] w-[167px] " key={artwork.artist}>
                        <CardHeader className="flex items-center justify-center">
                            <div className="relative w-[159px] h-[159px] sm:w-[200px] sm:h-[200px]">
                                <Image
                                    src={MOCK}
                                    alt="FOTO DE PERFIL"
                                    fill
                                    className="absolute object-cover rounded-[8px]"
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center flex-col">
                            <CardTitle>Loja do seu zé</CardTitle>
                            <CardDescription className="text-ellipsis">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>

    );
}

export default HomeCatalogue;

