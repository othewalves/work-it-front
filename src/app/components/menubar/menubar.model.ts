import { useQuery } from "@tanstack/react-query"
import api from "../../api/axios"
import { User } from "./menubar.types";

const useMenubar = () => {
    const { data: user, isPending } = useQuery<User>({
        queryKey: ['user', 'details'],
        queryFn: async () => {
            const { data } = await api.get(
                '/user',
                { withCredentials: true }
            );
            return data
        },
        staleTime: 1000 * 60 * 5
    });

    return { user, isPending }
};

export default useMenubar;