import { createContext } from "react";

export const MainContext = createContext();

export default function ContextProvider ({ children }) {
    return (
        <MainContext.Provider value={{
            
        }}>
            {children}
        </MainContext.Provider>
    )
}