'use client'
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { loginForm, loginSchema } from './login.schema';

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<loginForm>({
        resolver: zodResolver(loginSchema)
    });

    const handleLogin = (data: loginForm) => {
        console.log(data);
    }

    return (
        <div className="flex items-center justify-center">
            <Card className="w-full max-w-sm mt-16">
                <CardHeader>
                    <CardTitle>Faça login</CardTitle>
                    <CardDescription>
                        Informe seus dados para prosseguir
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleLogin)}>
                        <Input
                            placeholder="Informe seu e-mail"
                            type="email"
                            {...register('email')}
                        />
                        <span className="text-xs text-red-600">
                            {errors.email?.message}
                        </span>
                        <Input
                            placeholder="Informe sua senha"
                            type="password"
                            {...register('password')}
                        />
                        <span className="text-xs text-red-600">
                            {errors.password?.message}
                        </span>
                        <Button className="w-full" type="submit">Fazer login</Button>
                    </form>
                    <Button className="w-full mt-4" variant="secondary">Cadastre-se</Button>
                </CardContent>
            </Card >

        </div>
    );
}

export default Login;