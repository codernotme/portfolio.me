import React from "react";
import Socials from "@/component/social/social";
export default function Social(){
    return (
        <main className="flex min-h-screen soc flex-col items-center justify-between p-24">
            <h1>My Socials</h1>
            <Socials/>
        </main>
    );
}