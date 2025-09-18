'use client'
import { Button } from "@/components/ui/button";
import useSolutionSheet from "@/src/app/components/solutions-sheet/solution-sheet.model";
import { ArrowUpRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useParams } from "next/navigation";
import { StoreHeader } from "../../components/store-header";
import { Separator } from "@/components/ui/separator";
import SolutionsTable from "./components/solutions-table";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SolutionsSheet from "@/src/app/components/solutions-sheet";

const Solutions = () => {
    const params = useParams<{ storeId: string }>();
    const storeId = params.storeId;

    const { isPending: isLoading, solutions } = useSolutionSheet(storeId);

    return (
        <div className="w-full px-8 py-2 sm:px-24 sm:py-4">
            <StoreHeader>
                <StoreHeader.Container>
                    <StoreHeader.Router path={`/dashboard/`} />
                    <StoreHeader.Title />
                </StoreHeader.Container>
                <StoreHeader.Actions>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={'secondary'}>
                                <PlusIcon />
                                Novo serviço
                            </Button>
                        </SheetTrigger>
                        <SolutionsSheet />
                    </Sheet>
                    <Button variant={'secondary'}>
                        Visitar loja
                        <ArrowUpRightIcon />
                    </Button>
                </StoreHeader.Actions>
            </StoreHeader>
            <Separator />
            <SolutionsTable storeId={storeId} />
        </div>
    );
}

export default Solutions;