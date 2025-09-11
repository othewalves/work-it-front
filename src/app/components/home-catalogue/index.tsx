import * as React from "react"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import useHomeCatalogue from "./home-catalogue.model"


const HomeCatalogue = () => {

    const { isPending, stores } = useHomeCatalogue();

    if (isPending) {
        return <h1>Carregando...</h1>
    }
    if (!stores) {
        return <h1>Ops...Algo deu errado :(</h1>
    }

    return (
        <ScrollArea className="w-full ">
            <div className="flex w-full gap-4">
                {stores.map((store) => (
                    <Card className="sm:w-[220px] w-[167px] " key={store.id}>
                        <CardHeader className="flex items-center justify-center">
                            <div className="relative w-[159px] h-[159px] sm:w-[200px] sm:h-[200px]">
                                <Image
                                    src={store.photo}
                                    alt={store.name}
                                    fill
                                    className="absolute object-cover rounded-[8px]"
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center flex-col">
                            <CardTitle>{store.name}</CardTitle>
                            <CardDescription className="text-ellipsis">
                                {store.slogan}
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

