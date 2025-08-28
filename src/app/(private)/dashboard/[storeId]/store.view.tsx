'use client'

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SolutionsSheet from "@/src/app/components/solutions-sheet";
import useStoreModel from "./store.model";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Separator } from "@/components/ui/separator";
import useSolutionSheet from "@/src/app/components/solutions-sheet/solution-sheet.model";

const StoreView = () => {

    const params = useParams<{ storeId: string }>();
    const storeId = params.storeId;


    const { isPending, store } = useStoreModel(storeId);
    const { isPending: isLoading, solutions } = useSolutionSheet(storeId);
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
            <div>
                <h2 className="text-xl font-medium">Serviços</h2>
                <Separator />
                {solutions?.map((solution) => (
                    <div key={solution.id}>
                        <span>{solution.name}</span>
                        <span>{solution.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StoreView;