import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocFromAuth } from "../utilities/firebase/firebase";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const credentials = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsibscribe = onAuthStateChangedListener((user) => {

            if (user) {
                createUserDocFromAuth(user);
            }
            setCurrentUser(user)
        })

        return unsibscribe
    }, [])

    return <UserContext.Provider
        value={credentials}
    >
        {children}
    </UserContext.Provider>
}