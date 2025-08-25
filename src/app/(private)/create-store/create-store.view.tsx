import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import StoreSharp from '../../../../public/store-sharp.png';
import Image from "next/image";
import FormStore from "../../components/form-store";

const CreateStoreView = () => {
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
                    <FormStore />
                </CardContent>
            </Card >
        </div>
    );
}

export default CreateStoreView;