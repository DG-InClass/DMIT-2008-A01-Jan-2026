// ~/components/state/AuthProvider.js

import { useState, useEffect, useContext, createContext } from 'react';
import { router } from 'next/router';

import { login } from '@/utils/api/auth'; // actual fetch calls

export const AuthenticationContext = createContext({});

/**
 * This custom hook supplies context for user authentication.
 * @params { object } options
 * @params { options.protectedPage: boolean } Defaults to false
 * @params { options.redirectUrl: string } Defaults to the home page
 * @returns { { token: string, user: object, isAuthenticated: boolean, signIn: Function, signOut: Function }}
 */
export const useAuth = (options = {protectedPage: false, redirectUrl: '/'}) => {
    const context = useContext(AuthenticationContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    const router = useRouter();
    useEffect(() => {
        if(!context.isAuthenticated && options.protectedPage) {
            router.push(redirectUrl); // Navigate away from this page
        }
    }, [context.isAuthenticated]); // Updates when .isAuthenticated changes
    return context;
}

export default function AuthProvider({children}) {
    const [token, setToken] = useState(""); // The "Access Token"
    const [user, setUser] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signIn = ({email, password}) => {
        return login({email, password}).then(loginData => {
            setIsAuthenticated(true);
            setToken(loginData.accessToken);
            setUser(loginData.user);
        });
    }

    const signOut = () => {
        setIsAuthenticated(false);
        setUser();
        setToken("");
    }

    return <AuthenticationContext.Provider value={ { token, user, isAuthenticated, signIn, signOut } }>
        {children}
    </AuthenticationContext.Provider>
}
