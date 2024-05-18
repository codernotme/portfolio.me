import React from "react";
import { Inter } from 'next/font/google';
import Card from "@/component/work/card";
export default function Work() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 work" style={{backgroundImage: "url(/images/dark-black-bg.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", top: "0", left: "0", right: "0", bottom: "0"}}>
            <Card />
        </main>
    );
}