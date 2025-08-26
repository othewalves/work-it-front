'use client'
import FormStoreAddress from "@/src/app/components/form-store-address";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const AddressView = ({ storeId }: { storeId: string }) => {

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
                    <FormStoreAddress />
                </CardContent>
            </Card >
        </div>
    );
}

export default AddressView;