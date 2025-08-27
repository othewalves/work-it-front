import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios";
import { Stores } from "./dashboard.types";

const useDashboardModel = () => {
    const { data: stores, isPending } = useQuery<Stores[]>({
        queryKey: ['owner', 'stores'],
        queryFn: async () => {
            const { data } = await api.get('store/owner', {
                withCredentials: true,
            })

            return data
        },

        staleTime: 1000 * 60 * 5,
    })

    return {
        stores,
        isPending
    }
}

export default useDashboardModel;