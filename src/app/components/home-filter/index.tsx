'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FunnelIcon } from "@heroicons/react/24/outline";
import useHomeFilterModel from "./home-filter.model";

const HomeFilter = () => {

    const { categories, filter, handleSubmit, handlefilter, isPending, register, selectFilter } = useHomeFilterModel();

    if (isPending) {
        return <h1>Carregando...</h1>
    }
    if (!categories) {
        return <h1>Ops! Aconteceu um erro </h1>
    }

    return (
        <form onSubmit={handleSubmit(handlefilter)} className="flex flex-col xl:flex-row gap-8 md:gap-16">
            <div className="flex flex-row items-center gap-2 xl:w-1/3">
                <Input placeholder="Buscar" {...register('filter')} />
                <Button size={'lg'} type="submit">
                    <FunnelIcon />
                </Button>
            </div>
            <div className="flex-row gap-4 flex flex-wrap">
                {categories.map((category) => (
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