"use client"
import { ThemeProvider } from "next-themes";
import {SessionProvider} from "next-auth/react";
import { useState } from "react";
import NavBarContext from "@context/NavBarContext";

export default function Providers({ children }){

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <SessionProvider>
            <NavBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen}}>
                <ThemeProvider enableSystem={true} attribute="class">
                    {children}
                </ThemeProvider>
            </NavBarContext.Provider>
            
        </SessionProvider>
     );
}