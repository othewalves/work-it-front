'use client';

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode
} from 'react';

interface IUser {
    id: string;
    name: string;
    email: string;
    role?: string
};

export interface IUserContext {
    user: IUser;
    setUser: (user: IUser) => void;
    handleUser: (user: IUser) => void;
}


const defaultUser: IUser = {
    id: '',
    name: '',
    email: '',
    role: ''
};


export const UserContext = createContext<IUserContext>({
    user: defaultUser,
    setUser: () => { },
    handleUser: () => { },
})


export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<IUser>(defaultUser);

    const handleUser = (user: IUser) => {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    };

    useEffect(() => {
        const hasUser = localStorage.getItem('user');
        const userLogged: IUser = hasUser ? JSON.parse(hasUser) : defaultUser;

        setUser(userLogged);
    }, []);


    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                handleUser,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}