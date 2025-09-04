'use client'
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SolutionsSheet from "@/src/app/components/solutions-sheet";
import useSolutionSheet from "@/src/app/components/solutions-sheet/solution-sheet.model";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useParams } from "next/navigation";

const Solutions = () => {
    const params = useParams<{ storeId: string }>();
    const storeId = params.storeId;

    const { isPending: isLoading, solutions } = useSolutionSheet(storeId);

    return (
        <div className="w-full px-8 py-2 sm:px-24 sm:py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center pb-4">
                <Button asChild variant={'link'}>
                    <Link href={`/dashboard/${storeId}`}>
                        <ArrowLeftIcon />
                        Voltar para dashboard
                    </Link>
                </Button>
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

export default Solutions;