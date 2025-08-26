'use client'
import { Button } from "@/components/ui/button";
import useAddressModel from "../../(private)/create-store/address/[storeId]/address.model";
import InputZipcode from "../input-zipcode";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useEffect } from "react";

const FormStoreAddress = () => {
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
        <>
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
        </>
    );
}

export default FormStoreAddress;