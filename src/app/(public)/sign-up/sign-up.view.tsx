'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import InputPhone from '../../components/input-phone';

import Link from "next/link";

import { useSignUpModel } from "./sign-up.model";
import InputCPF from "../../components/input-cpf";

type SignUpViewProps = ReturnType<typeof useSignUpModel>;

const SignUpView = (props: SignUpViewProps) => {

    const { control, errors, handleSubmit, isPending, onSubmit, register } = props;

    return (
        <div className="w-full h-full px-8 py-4 sm:px-24 sm:py-6 flex items-center justify-center">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Cadastre-se</CardTitle>
                    <CardDescription>
                        Informe seus dados para prosseguir
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="w-full gap-4 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            placeholder="Informe seu nome"
                            type="text"
                            autoCapitalize="sentences"
                            {...register('name')}
                        />
                        <span className="text-xs text-red-600">
                            {errors.name?.message}
                        </span>
                        <div className="flex flex-row w-full justify-between gap-2">
                            <div>
                                <div key="input-cpf">
                                    <InputCPF
                                        control={control}
                                        name="cpf"
                                    />
                                    <span className="text-xs text-red-600">
                                        {errors.cpf?.message}
                                    </span>

                                </div>
                            </div>
                            <div>
                                <InputPhone
                                    control={control}
                                    name="phone"
                                />
                                <span className="text-xs text-red-600">
                                    {errors.phone?.message}
                                </span>
                            </div>
                        </div>
                        <Input
                            placeholder="Informe seu e-mail"
                            type="email"
                            autoCapitalize="none"
                            {...register('email')}
                        />
                        <span className="text-xs text-red-600">
                            {errors.email?.message}
                        </span>
                        <Input
                            placeholder="Insira sua senha"
                            type="password"
                            {...register('password')}
                        />
                        <span className="text-xs text-red-600">
                            {errors.password?.message}
                        </span>
                        <Input
                            placeholder="Confirme sua senha"
                            type="password"
                            {...register('confirmPassword')}
                        />
                        <span className="text-xs text-red-600">
                            {errors.confirmPassword?.message}
                        </span>
                        {/* </div> */}
                        <Button disabled={isPending} className="w-full" type="submit">
                            {isPending ? 'Aguarde...' : 'Cadastrar'}

                        </Button>
                    </form>
                    <Button disabled={isPending} className="mt-4" variant="secondary">
                        <Link href={'/sign-up'}>
                            Fazer login
                        </Link>
                    </Button>
                </CardContent>
            </Card >
        </div>
    )
};

export default SignUpView;