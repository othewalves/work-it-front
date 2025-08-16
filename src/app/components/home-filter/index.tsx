'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { FunnelIcon as Funnel } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { filterForm, filterSchema } from "./filter.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const CATEGORIES = [
    { id: 'asdfghj', name: 'Assistência técnica' },
    { id: 'fghjk', name: 'Autos' },
    { id: 'cvbnm', name: 'Moda e beleza' },
    { id: 'ertyui', name: 'Saúde e bem estar' },
]

const HomeFilter = () => {

    const [filter, setFilter] = useState('');

    const { register, handleSubmit, setValue } = useForm<filterForm>({
        resolver: zodResolver(filterSchema),
        defaultValues: {
            filter: filter
        }
    });

    const selectFilter = (filter: string) => {
        setFilter(filter);
        setValue("filter", filter);
    }

    const handlefilter = ({ filter }: filterForm) => {

    }


    return (
        <form onSubmit={handleSubmit(handlefilter)} className="flex flex-col xl:flex-row gap-8 md:gap-16">
            <div className="flex flex-row items-center gap-2 xl:w-1/3">
                <Input placeholder="Buscar" {...register('filter')} />
                <Button type="submit">
                    <FunnelIcon />
                </Button>
            </div>
            <div className="flex-row gap-4 flex flex-wrap">
                {CATEGORIES.map((category) => (
                    <Button
                        key={category.id}
                        onClick={() => selectFilter(category.name)}
                        variant={filter === category.name ? 'secondary' : 'ghost'}
                    >
                        {category.name}
                    </Button>
                ))}
            </div>
        </form>
    );
}

export default HomeFilter;