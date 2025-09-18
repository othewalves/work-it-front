'use client'
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowUpRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams } from "next/navigation";
import useStoreModel from "../../[storeId]/store.model";
import { ReactNode } from "react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const StoreHeader = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4">
            {children}
        </div>
    );
}

const Title = () => {
    const params = useParams<{ storeId: string }>();
    const storeId = params.storeId;

    const { isPending, store } = useStoreModel(storeId);

    if (isPending) {
        return <h1>Carregando...</h1>
    }
    return (
        <div className="block">
            <h1 className="sm:text-3xl text-xl font-bold ">{store?.name}</h1>
            <p className="sm:text-base text-xs ">{store?.cnpj}</p>
        </div>
    )

}

const Router = ({ path }: { path: string }) => {
    return (
        <Button asChild variant={'link'}>
            <Link href={path}>
                <ArrowLeftIcon />
                Voltar para dashboard
            </Link>
        </Button>
    )
}

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

const Actions = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-row gap-2">
            {children}
        </div>
    )
}

StoreHeader.Container = Container;
StoreHeader.Router = Router;
StoreHeader.Title = Title;
StoreHeader.Actions = Actions;

export { StoreHeader }