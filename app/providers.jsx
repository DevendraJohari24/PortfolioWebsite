"use client"
import {SessionProvider} from "next-auth/react";
import { useState } from "react";
import NavBarContext from "@context/NavBarContext";

export default function Providers({ children }){

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <SessionProvider>
            <NavBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen}}>
                    {children}
            </NavBarContext.Provider>
            
        </SessionProvider>
     );
}