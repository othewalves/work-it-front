import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { CreateStoreForm, CreateStoreSchema } from "./create-store.schema";
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import api from '../../api/axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { StoreResponse } from './create-store.types';

const useCreateStoreModel = () => {

    const router = useRouter();

    const { control, register, handleSubmit, watch, formState: { errors } } = useForm<CreateStoreForm>({
        resolver: zodResolver(CreateStoreSchema)
    });

    const { mutate, isPending } = useMutation<
        string,
        AxiosError<{ errors: { field: string; message: string }[] }
        >, FormData>({
            mutationFn: async (payload: FormData) => {
                const { data } = await api.post<StoreResponse>(
                    '/store',
                    payload,
                    { withCredentials: true }
                )

                return data.id;
            },
            onSuccess: (store) => {
                toast.success('Aguarde enquanto redirecionamos')
                router.push(`create-store/address/${store}`)
            },
            onError: () => {
                toast.error('Não foi possível, tente mais tarde')
            }
        });

    const onSubmit = async (payload: CreateStoreForm) => {

        const formData = new FormData();

        formData.append('name', payload.name);
        formData.append('slogan', payload.slogan || '');
        formData.append('category', payload.category);
        formData.append('cnpj', payload.cnpj);
        formData.append('description', payload.description || '');
        formData.append('email', payload.email);
        formData.append('phone', payload.phone);

        if (payload.photo && payload.photo.length > 0) {
            formData.append('file', payload.photo[0]);
        }

        mutate(formData);
    }

    return {
        control,
        register,
        onSubmit,
        handleSubmit,
        errors,
        isPending,
        watch
    };
}

export default useCreateStoreModel;