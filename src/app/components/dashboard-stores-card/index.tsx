'use client'
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { CalendarDateRangeIcon, PlusIcon } from "@heroicons/react/24/outline";
import useDashboardModel from "../../(private)/dashboard/dashboard.model";
import Image from "next/image";
import SolutionsSheet from "../solutions-sheet";
import Link from "next/link";

type DashboardViewProps = ReturnType<typeof useDashboardModel>;

const DashboardStoresCard = (props: DashboardViewProps) => {
    const { stores, isPending } = props;

    if (isPending) {
        return <h1>Aguarde...</h1>
    }

    if (stores?.length === 0) {
        return <h1>Não há comércios ligados ao usuário</h1>
    }

    return (
        <div className="w-full flex justify-between flex-wrap mt-6">
            {/* <Sheet> */}
            {stores?.map((store) => (
                <Link key={store.id} href={`/dashboard/${store.id}`} className="cursor-pointer">
                    <Card className="w-full sm:w-[360px] h-[260px]">
                        <CardHeader className="text-center">
                            <CardTitle>{store.name}</CardTitle>
                            <CardDescription>{store.cnpj}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center">
                            <Image
                                src={`http://localhost:5000/files/${store.photo}`}
                                alt={store.name}
                                width={120}
                                height={120}
                                objectFit="cover"
                                className="rounded-full"

                            />
                        </CardContent>
                        {/* <CardFooter className="w-full flex justify-center gap-3">
                        <SheetTrigger asChild>
                            <Button>Serviços</Button>
                        </SheetTrigger>
                        <Button variant={'secondary'}>
                            <CalendarDateRangeIcon />
                            Agenda
                        </Button>
                    </CardFooter> */}
                    </Card>
                </Link>
            ))}
            {/* <SolutionsSheet /> */}
            {/* </Sheet> */}


        </div>
    );
}

export default DashboardStoresCard;