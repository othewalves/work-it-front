'use client'
import { Input } from "@/components/ui/input";
import useCreateStoreModel from "../../(private)/create-store/create-store.model";
import InputCNPJ from "../input-cnpj";
import { Button } from "@/components/ui/button";
import InputPhone from "../input-phone";
import SelectCategories from "../select-categories";

const FormStore = () => {
    const { register, control, errors, handleSubmit, onSubmit, isPending } = useCreateStoreModel();

    return (

        <form onSubmit={handleSubmit(onSubmit, errs => { console.error('erou', errs) })} className="w-full gap-4 flex flex-col">
            <SelectCategories
                control={control}
                name="category"
            />
            <span className="text-xs text-red-600">
                {errors.category?.message}
            </span>
            <InputCNPJ control={control} name="cnpj" />
            <span className="text-xs text-red-600">
                {errors.cnpj?.message}
            </span>
            <Input placeholder="Nome do comércio" {...register('name')} />
            <span className="text-xs text-red-600">
                {errors.name?.message}
            </span>
            <Input placeholder="Slogan" {...register('slogan')} />
            <span className="text-xs text-red-600">
                {errors.slogan?.message}
            </span>
            <Input placeholder="Descrição" {...register('description')} />
            <span className="text-xs text-red-600">
                {errors.description?.message}
            </span>
            <Input placeholder="E-mail de contato" {...register('email')} />
            <span className="text-xs text-red-600">
                {errors.email?.message}
            </span>
            <InputPhone control={control} name="phone" />
            <span className="text-xs text-red-600">
                {errors.phone?.message}
            </span>
            <Input
                type="file"
                accept="image/*"
                {...register("photo")}
            />
            <span className="text-xs text-red-600">
                {errors.photo?.message as string}
            </span>
            <Button type="submit" disabled={isPending}>
                {isPending ? 'Aguarde...' : 'Próximo'}
            </Button>
        </form>
    );
}

export default FormStore;