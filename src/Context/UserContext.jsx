import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const credentials = { currentUser, setCurrentUser }

    return <UserContext.Provider
        value={credentials}
    >
        {children}
    </UserContext.Provider>
}