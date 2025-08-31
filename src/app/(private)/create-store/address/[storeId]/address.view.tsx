'use client'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent

} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputZipcode from "@/src/app/components/input-zipcode";
import { useEffect } from "react";
import { toast } from "sonner";
import useAddressModel from "./address.model";

const AddressView = () => {
    const { register, control, errors, handleSubmit, onSubmit, isPending, watch, zipcode, fetchAddress } = useAddressModel();

    const street = watch('street');

    if (zipcode) {
        toast.warning(`zipcode: ${zipcode}`)
    }

    useEffect(() => {
        if (zipcode && zipcode.replace(/\D/g, "").length === 8) {
            fetchAddress(zipcode);
        }
    }, [zipcode]);


    return (
        <div className="flex items-center justify-center">
            <Card className="w-full max-w-sm mt-8">
                <CardHeader>
                    <CardTitle className="text-center">Cadastre o endereço do comércio</CardTitle>
                    <CardDescription className="text-center">
                        Informe os CEP para prosseguir
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full gap-4 flex flex-col">
                        <InputZipcode
                            control={control}
                            name="zipCode"
                        />
                        <span className="text-xs text-red-600">
                            {errors.zipCode?.message}
                        </span>

                        {
                            street && (
                                <div className="gap-4 flex flex-col">
                                    <Input
                                        placeholder="Rua"
                                        disabled={true}
                                        {...register('street')}
                                    />
                                    <span className="text-xs text-red-600">{errors.street?.message}</span>
                                    <Input
                                        placeholder="Bairro"
                                        disabled={true}
                                        {...register('neighborhood')}
                                    />
                                    <span className="text-xs text-red-600">{errors.neighborhood?.message}</span>
                                    <Input
                                        placeholder="Cidade"
                                        disabled={true}
                                        {...register('city')}
                                    />
                                    <span className="text-xs text-red-600">{errors.city?.message}</span>
                                    <Input
                                        placeholder="Estado"
                                        disabled={true}
                                        {...register('state')}
                                    />
                                    <span className="text-xs text-red-600">{errors.state?.message}</span>
                                    <Input
                                        placeholder="Número"
                                        {...register('number')}
                                    />
                                    <span className="text-xs text-red-600 block">{errors.number?.message}</span>
                                    {/* <Input
                placeholder="Complemento"
                disabled={true}
                {...register('complement')}
            /> */}
                                    <Button type="submit" disabled={isPending}>
                                        {isPending ? 'Aguarde...' : 'Próximo'}
                                    </Button>
                                </div>
                            )
                        }
                    </form>
                </CardContent>
            </Card >
        </div>
    );
}

export default AddressView;