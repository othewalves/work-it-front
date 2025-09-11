import { useState } from "react";
import { useForm } from "react-hook-form";
import { filterForm, filterSchema } from "./filter.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios";
import { Category } from "./home-filter.type";

const useHomeFilterModel = () => {
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
        toast(filter);
    }

    const { data: categories, isPending } = useQuery<Category[]>({
        queryKey: ['categories', 'filter'],
        queryFn: async () => {
            const { data } = await api.get('category');
            return data
        }
    });

    return {
        filter,
        setFilter,
        register,
        handleSubmit,
        selectFilter,
        handlefilter,
        categories,
        isPending,
    }

};

export default useHomeFilterModel;