'use client'
import dynamic from "next/dynamic";
import { useSignUpModel } from "./sign-up.model";
const SignUpView = dynamic(() => import('./sign-up.view'), {
    ssr: false,
    loading: () => <p>Carregando...</p>,
});


const SignUp = () => {

    const methods = useSignUpModel()

    if (methods.isPending) {
        return <h1>Carregando...</h1>
    }

    return <SignUpView {...methods} />;
}

export default SignUp;