import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from "@/components/ui/card";
import StoreSharp from '../../../../public/store-sharp.png';
import Image from "next/image";
import useCreateStoreModel from "./create-store.model";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputCNPJ from "../../components/input-cnpj";
import InputPhone from "../../components/input-phone";
import SelectCategories from "../../components/select-categories";

const CreateStoreView = () => {
    const { register, control, errors, handleSubmit, onSubmit, isPending } = useCreateStoreModel();

    return (
        <div className="flex items-center justify-center">
            <Card className="w-full max-w-sm mt-8">
                <CardHeader>
                    <CardTitle className="text-center">Cadastro do comércio</CardTitle>
                    <div className="bg-primary/20 mx-auto w-[140px] p-8 flex items-center justify-center rounded-full">
                        <Image
                            src={StoreSharp}
                            alt="Silhueta do comércio"
                            width={120}
                            height={120}
                        />
                    </div>
                    <CardDescription className="text-center">
                        Informe os dados para prosseguir
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full gap-4 flex flex-col">
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
                </CardContent>
            </Card >
        </div>
    );
}

export default CreateStoreView;