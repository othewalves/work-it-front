'use client'
import { useSignUpModel } from "./sign-up.model";
import SignUpView from "./sign-up.view";

const SignUp = () => {

    const methods = useSignUpModel()

    if (methods.isPending) {
        return <h1>Carregando...</h1>
    }

    return <SignUpView {...methods} />;
}

export default SignUp;