import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { PlusIcon } from "@heroicons/react/24/outline";
import useSolutionSheet from "./solution-sheet.model";
import { useParams } from "next/navigation";
import { Input } from "@/components/ui/input";

const SolutionsSheet = () => {

    const params = useParams<{ storeId: string }>();
    const storeId = params.storeId;

    const { handleSubmit, onSubmit, register, errors, isLoading, watch } = useSolutionSheet(storeId);

    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Novo serviço</SheetTitle>
            </SheetHeader>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-2 flex flex-col gap-4"
            >
                <Input
                    type="text"
                    placeholder="Nome do serviço"
                    {...register('name')}
                />
                <span className="text-xs text-red-600">{errors.name?.message}</span>

                <Input
                    type="number"
                    placeholder="Preço"
                    {...register('price', { valueAsNumber: true })}
                />
                <span className="text-xs text-red-600">{errors.price?.message}</span>
                <Input
                    type="number"
                    placeholder="Duração"
                    {...register('duration', { valueAsNumber: true })}
                />
                <span className="text-xs text-red-600">{errors.duration?.message}</span>
                <Input
                    type="text"
                    placeholder="Descrição"
                    {...register('description')}
                />
                <span className="text-xs text-red-600">{errors.description?.message}</span>
                <Input
                    type="text"
                    placeholder="Informe as tags relacionadas separando por ;"
                    {...register("tags", {
                        setValueAs: (val: string) =>
                            val
                                .split(";") // separa pelas ";"
                                .map((tag) => tag.trim()) // remove espaços extras
                                .filter((tag) => tag.length > 0), // remove vazios
                    })}
                />
                <span className="text-xs text-red-600">{errors.tags?.message}</span>
                <Button type="submit">
                    {isLoading
                        ? 'Aguarde...'
                        : 'Cadastrar serviço'
                    }
                </Button>
            </form>

        </SheetContent>
    );
}

export default SolutionsSheet;