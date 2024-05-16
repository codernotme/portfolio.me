import React from "react";
import { Inter } from 'next/font/google';
import Card from "@/component/work/card";
export default function Work() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 work">
            <div className="background">
                <h1 style={{ color: "white", fontFamily: "Playfair Display", fontSize: "50px", fontWeight: "900", letterSpacing: "20px", alignContent: "center", textAlign: "center",marginTop:"20px" }}>Work Page</h1>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Card />
        </main>
    );
}