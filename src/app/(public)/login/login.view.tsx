import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useLoginModel } from "./login.model";

type LoginViewProps = ReturnType<typeof useLoginModel>;

const LoginView = (props: LoginViewProps) => {
    const { register, onSubmit, handleSubmit, errors, isPending } = props;

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
                    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
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
                        <Button className="w-full" type="submit" disabled={isPending}>
                            {isPending ? 'Aguarde...' : 'Fazer login'}
                        </Button>
                    </form>
                    <Button className="w-full mt-4" variant="secondary" disabled={isPending} asChild>
                        <Link href={'/sign-up'}>
                            Cadastre-se
                        </Link>
                    </Button>
                </CardContent>
            </Card >
        </div>
    );
}

export default LoginView;