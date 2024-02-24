"use client"
import React from 'react';
import {NextUIProvider} from "@nextui-org/react";
const Provider = ({children}:React.PropsWithChildren) => {
    return (
                <NextUIProvider>
                    {children}
                </NextUIProvider>
    );
};

export default Provider;
