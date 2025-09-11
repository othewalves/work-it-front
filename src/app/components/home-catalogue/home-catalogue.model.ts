import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios";
import { Store } from "./home-catalogue.type";

const useHomeCatalogue = () => {
    const { data: stores, isPending } = useQuery<Store[]>({
        queryKey: ['stores', 'home'],
        queryFn: async () => {
            const { data } = await api.get('store')
            return data;
        },
        staleTime: 1000 * 60 * 5
    });

    return {
        stores,
        isPending
    }
};

export default useHomeCatalogue;