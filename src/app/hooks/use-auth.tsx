'use client';

import {
    createContext,
    useState,
    useEffect,
    ReactNode
} from 'react';

interface IUser {
    id: string;
    name: string;
    email: string;
    role?: string
    store: IStores[]
    token: string;
};
export interface IStores {
    id: string;
    name: string;
    slogan: string;
    cnpj: string;
    description: string;
    phone: string[];
    email: string;
    photo: string;
    userId: string;
}


export interface IAuthContext {
    user: IUser;
    setUser: (user: IUser) => void;
    handleUser: (user: IUser) => void;
}


const defaultUser: IUser = {
    id: '',
    name: '',
    email: '',
    role: '',
    store: [],
    token: ''
};


export const AuthContext = createContext<IAuthContext>({
    user: defaultUser,
    setUser: () => { },
    handleUser: () => { },
})


export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<IUser>(defaultUser);

    const handleUser = (user: IUser) => {
        setUser(user);
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('workit_token', JSON.stringify(user.token));
    };

    useEffect(() => {
        const hasUser = sessionStorage.getItem('user');
        const userLogged: IUser = hasUser ? JSON.parse(hasUser) : defaultUser;

        setUser(userLogged);
    }, []);


    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                handleUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}