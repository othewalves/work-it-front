'use client';

import {
    createContext,
    useState,
    useEffect,
    ReactNode
} from 'react';

import { User } from '../(public)/login/login.types';

export interface IAuthContext {
    user: User;
    setUser: (user: User) => void;
    handleUser: (user: User, token: string) => void;
}


const defaultUser: User = {
    id: '',
    name: '',
    email: '',
    role: '',
    store: [],
    // token: ''
};


export const AuthContext = createContext<IAuthContext>({
    user: defaultUser,
    setUser: () => { },
    handleUser: () => { },
})


export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User>(defaultUser);

    const handleUser = (user: User, token: string) => {
        setUser(user);
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('workit_token', JSON.stringify(token));
    };

    useEffect(() => {
        const hasUser = sessionStorage.getItem('user');
        const userLogged: User = hasUser ? JSON.parse(hasUser) : defaultUser;

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