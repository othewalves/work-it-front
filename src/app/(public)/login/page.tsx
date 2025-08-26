'use client'

import dynamic from "next/dynamic";
import { useLoginModel } from "./login.model";

const LoginView = dynamic(() => import('./login.view'), {
    ssr: false,
    loading: () => <p>Aguarde...</p>,
});


const Login = () => {

    const methods = useLoginModel();

    return <LoginView {...methods} />;
}

export default Login;