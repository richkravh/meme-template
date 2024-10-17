import { createContext } from "react";

export const MainContext = createContext();

export default function ContextProvider ({ children }) {
    const magicWord = "Plurel";
    return (
        <MainContext.Provider value={{
            magicWord
        }}>
            {children}
        </MainContext.Provider>
    )
}