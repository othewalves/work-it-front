'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import useDashboardModel from "../../(private)/dashboard/dashboard.model";
import Image from "next/image";
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
            {stores?.map((store) => (
                <Link key={store.id} href={`/dashboard/${store.id}`} className="cursor-pointer">
                    <Card className="w-full sm:w-[360px] h-[260px]">
                        <CardHeader className="text-center">
                            <CardTitle>{store.name}</CardTitle>
                            <CardDescription>{store.cnpj}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center">
                            <Image
                                src={store.photo}
                                alt={store.name}
                                width={120}
                                height={120}
                                objectFit="cover"
                                className="rounded-full"

                            />
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    );
}

export default DashboardStoresCard;