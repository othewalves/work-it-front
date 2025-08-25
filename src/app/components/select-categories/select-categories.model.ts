import { useQuery } from "@tanstack/react-query";

import api from "../../api/axios";
import { useState } from "react";

const useSelectCategoriesModel = () => {

    const { data: categories, isPending } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const { data } = await api.get("category");
            return data as { id: string, name: string }[];
        },
        staleTime: 1000 * 60 * 5,
    });

    const [categoryID, setCategoryID] = useState<string | null>(null);

    return {
        categories,
        isPending,
        categoryID,
        setCategoryID
    };
}

export default useSelectCategoriesModel;