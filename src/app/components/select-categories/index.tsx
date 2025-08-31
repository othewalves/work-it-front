'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import useSelectCategoriesModel from "./select-categories.model";
import { Label } from "@/components/ui/label";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface SelectCategoriesProps<T extends FieldValues = FieldValues> {
    control: Control<T>;
    name: Path<T>;
}

const SelectCategories = <T extends FieldValues>({ control, name }: SelectCategoriesProps<T>) => {

    const { categories, isPending } = useSelectCategoriesModel();

    if (isPending) {
        return <>Carregando...</>
    }

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <Select
                    onValueChange={field.onChange}
                    value={field.value}
                >
                    <Label>Qual a categoria do seu negócio?</Label>
                    <SelectTrigger className="w-full h-10">
                        <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories?.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                                {category.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>)}

        />
    );
}

export default SelectCategories;