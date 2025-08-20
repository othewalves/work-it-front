'use client'

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { signUpForm, signUpSchema } from './sign-up.schema';

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import CPFInput from "../../components/cpf-input";
import PhoneInput from "../../components/phone-input";
const SignUp = () => {
    // const request: NextRequest;
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<signUpForm>({
        resolver: zodResolver(signUpSchema)
    });

    const handleSignUp = async (data: signUpForm) => {
        // await request.cookies.set('@work-it:token', JSON.stringify('absndma'));
        router.push('/dashboard')

    };

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
                    <form className="w-full gap-4 flex flex-col" onSubmit={handleSubmit(handleSignUp)}>
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
                                    <CPFInput {...register('cpf')} />
                                    <span className="text-xs text-red-600">
                                        {errors.cpf?.message}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <PhoneInput {...register('phone')} />
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
                        <Button className="w-full" type="submit">Cadastrar</Button>
                    </form>
                    <Button className="mt-4" variant="secondary">
                        <Link href={'/sign-up'}>
                            Fazer login
                        </Link>
                    </Button>
                </CardContent>
            </Card >
        </div>
    );
}

export default SignUp;