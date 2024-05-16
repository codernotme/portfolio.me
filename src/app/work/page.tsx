import React from "react";
import { Inter } from 'next/font/google';
import Card from "@/component/work/card";
export default function Work() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 work">
            <div className="background">
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