import { ArrowUpRightIcon, PencilSquareIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Sheet, SheetContent, SheetDescription, SheetTrigger } from "@/components/ui/sheet";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import useSolutionSheet from "@/src/app/components/solutions-sheet/solution-sheet.model";
import SolutionsSheet from "@/src/app/components/solutions-sheet";

const SolutionsTable = ({ storeId }: { storeId: string }) => {

    const { isPending: isLoading, solutions } = useSolutionSheet(storeId);

    if (isLoading) {
        return <h1>Carregando...</h1>
    }

    return (
        <div>
            <h2 className="text-xl font-medium mt-8 mb-4">Serviços</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead className="w-[280px]">Serviço</TableHead>
                        <TableHead>Duração</TableHead>
                        <TableHead className="">Preço</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {solutions?.map((solution) => (
                        <TableRow key={solution.id}>
                            <TableCell className="font-medium">{solution.id.slice(-8).toUpperCase()}</TableCell>
                            <TableCell className="">{solution.name}</TableCell>
                            <TableCell>{solution.duration} minutos</TableCell>
                            <TableCell>R$ {solution.price}</TableCell>
                            <TableCell className="flex gap-2 justify-end">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant={'outline'} className="text-blue-500 hover:text-blue-400"><PencilSquareIcon /></Button>
                                    </SheetTrigger>
                                    <SolutionsSheet />
                                </Sheet>
                                <Button variant={'outline'} className="text-red-500 hover:text-red-400"><TrashIcon /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default SolutionsTable;