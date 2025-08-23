'use client'

import { useLoginModel } from "./login.model";
import LoginView from "./login.view";

const Login = () => {

    const methods = useLoginModel();

    return <LoginView {...methods} />;
}

export default Login;