'use client'

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StoreHeader } from "../components/store-header";

const StoreView = () => {

    const params = useParams<{ storeId: string }>();
    const storeId = params.storeId;

    return (
        <div className="w-full px-8 py-2 sm:px-24 sm:py-4">
            <StoreHeader>
                <StoreHeader.Container>
                    <StoreHeader.Router path={`/dashboard/`} />
                    <StoreHeader.Title />
                </StoreHeader.Container>
                <StoreHeader.Actions></StoreHeader.Actions>
            </StoreHeader>
            <div className="w-full gap-1.5 flex flex-col sm:flex-row ">
                <Card className="sm:w-1/3 cursor-pointer">
                    <CardHeader>
                        <CardTitle>Agendamentos</CardTitle>
                        <CardDescription>4 agendamentos para o dia de hoje</CardDescription>
                        <CardAction><ArrowRightIcon color="white" width={16} height={16} /></CardAction>
                    </CardHeader>
                </Card>
                <Card className="sm:w-1/3 cursor-pointer">
                    <Link href={`/dashboard/${storeId}/solutions`} className="w-full h-full">
                        <CardHeader>
                            <CardTitle>Serviços</CardTitle>
                            <CardDescription>Gerencie os serviços do seu estabelecimento</CardDescription>
                            <CardAction><ArrowRightIcon color="white" width={16} height={16} /></CardAction>
                        </CardHeader>
                    </Link>
                </Card>
                <Card className="sm:w-1/3 cursor-pointer">
                    <CardHeader>
                        <CardTitle>Faturamento</CardTitle>
                        <CardDescription>Tenha acesso ao controle financeiro do seu estabelecimento</CardDescription>
                        <CardAction><ArrowRightIcon color="white" width={16} height={16} /></CardAction>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
}

export default StoreView;