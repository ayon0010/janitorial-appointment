"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const queryClient = new QueryClient()

const QueryProvider = ({ children }) => {
    const pathName = usePathname();
    console.log(pathName);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);


    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryProvider;