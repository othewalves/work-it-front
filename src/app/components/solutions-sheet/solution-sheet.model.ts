import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../api/axios";
import { CreateSolutionForm, CreateSolutionSchema } from "./solution.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export interface Solution {
    id: string;
    name: string;
    price: number;
    duration: number;
    description: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
    store_id: string;
}


const useSolutionSheet = (storeId: string) => {

    const { control, register, handleSubmit, watch, setValue, formState: { errors } } = useForm<CreateSolutionForm>({
        resolver: zodResolver(CreateSolutionSchema)
    });

    setValue('store_id', storeId)

    const { data: solutions, isPending } = useQuery<Solution[]>({
        queryKey: ['solution', storeId],
        queryFn: async ({ queryKey }) => {
            const [, storeId] = queryKey;

            const { data } = await api.get<Solution[]>(
                `solution/${storeId}`,
                { withCredentials: true }
            );
            return data;
        },
        staleTime: 1000 * 60 * 5,
        enabled: !!storeId,

    });

    const { mutate, isPending: isLoading } = useMutation({
        mutationKey: ['solution', 'create'],
        mutationFn: async (payload: CreateSolutionForm) => {
            const { data } = await api.post(
                '/solution',
                payload,
                { withCredentials: true }
            );

            return data;
        }, onSuccess: () => {
            window.location.href = `/dashboard/${storeId}`;
        }
    })

    const onSubmit = async (payload: CreateSolutionForm) => {
        mutate(payload)
    }

    return {
        solutions,
        isPending,
        onSubmit,
        isLoading,
        control,
        register,
        handleSubmit,
        watch,
        errors,
    };
}

export default useSolutionSheet;