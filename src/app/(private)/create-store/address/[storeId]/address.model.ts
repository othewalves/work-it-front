import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CreateAddressForm, CreateAddressSchema } from "./address.schema";
import { useMutation } from "@tanstack/react-query";
import api from "@/src/app/api/axios";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";

const useAddressModel = () => {
    const router = useRouter();
    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm<CreateAddressForm>({
        resolver: zodResolver(CreateAddressSchema)
    });

    const params = useParams<{ storeId: string }>();

    setValue("storeId", params.storeId);
    const zipcode = watch('zipCode');


    const { mutate, isPending } = useMutation<string, AxiosError<{ errors: { field: string; message: string }[] }>, CreateAddressForm>({
        mutationKey: ['create', 'address'],
        mutationFn: async (payload: CreateAddressForm) => {
            const { data } = await api.post(
                'address',
                payload,
                { withCredentials: true }
            )

            return data;
        },
        onSuccess: () => {
            toast.success('Endereço criado com sucesso! Aguarde...')
            router.push('/dashboard');
        },
        onError: (error) => {
            if (error.response?.data?.errors) {
                error.response.data.errors.forEach((err) => toast.error(err.message));
            }
        }
    });

    const onSubmit = async (payload: CreateAddressForm) => {
        console.log('payload', payload);

        mutate(payload)
    }

    const fetchAddress = async (zipCode: string) => {
        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
            if (data.erro) {
                toast.error("CEP não encontrado");
                return;
            }

            // Preenche automaticamente os campos
            setValue("street", data.logradouro || "");
            setValue("neighborhood", data.bairro || "");
            setValue("city", data.localidade || "");
            setValue("state", data.uf || "");

            console.log('chamou');

        } catch {
            toast.error("Erro ao buscar CEP");
        }
    };

    return {
        control,
        register,
        handleSubmit,
        errors,
        mutate,
        isPending,
        onSubmit,
        fetchAddress,
        watch,
        setValue,
        zipcode
    };
}

export default useAddressModel;