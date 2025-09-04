'use client'

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SolutionsSheet from "@/src/app/components/solutions-sheet";
import useStoreModel from "./store.model";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StoreView = () => {

    const params = useParams<{ storeId: string }>();
    const storeId = params.storeId;


    const { isPending, store } = useStoreModel(storeId);

    if (isPending) {
        return <h1>Carregando...</h1>
    }

    return (
        <div className="w-full px-8 py-2 sm:px-24 sm:py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center pb-4">
                <div>
                    <Button asChild variant={'link'}>
                        <Link href={'/dashboard'}>
                            <ArrowLeftIcon />
                            Voltar para dashboard
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold">{store?.name}</h1>
                    <h1>{store?.cnpj}</h1>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant={'secondary'}>Editar</Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={'secondary'}>Novo serviço</Button>
                        </SheetTrigger>
                        <SolutionsSheet />
                    </Sheet>
                </div>
            </div>
            <div className="w-full gap-1.5 flex ">
                <Card className="w-1/3 cursor-pointer">
                    <CardHeader>
                        <CardTitle>Agendamentos</CardTitle>
                        <CardDescription>4 agendamentos para o dia de hoje</CardDescription>
                        <CardAction><ArrowRightIcon color="white" width={16} height={16} /></CardAction>
                    </CardHeader>
                </Card>
                <Card className="w-1/3 cursor-pointer">
                    <Link href={`/dashboard/${storeId}/solutions`}>
                        <CardHeader>
                            <CardTitle>Serviços</CardTitle>
                            <CardDescription>Gerencie os serviços do seu estabelecimento</CardDescription>
                            <CardAction><ArrowRightIcon color="white" width={16} height={16} /></CardAction>
                        </CardHeader>
                    </Link>
                </Card>
                <Card className="w-1/3 cursor-pointer">
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