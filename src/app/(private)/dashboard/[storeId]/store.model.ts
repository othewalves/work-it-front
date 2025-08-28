import { useQuery } from "@tanstack/react-query";
import api from "../../../api/axios";
import { Stores } from "../dashboard.types";

const useStoreModel = (storeId: string) => {
    const { data: store, isPending } = useQuery<Stores>({
        queryKey: ['owner', 'store', 'details'],
        queryFn: async () => {
            const { data } = await api.get(`store/${storeId}`, {
                withCredentials: true,
            })

            return data
        },

        staleTime: 0,
    })

    return {
        store,
        isPending
    }
}

export default useStoreModel;