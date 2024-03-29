"use client";
import {SessionProvider} from "next-auth/react";

function AppContext({children}) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AppContext