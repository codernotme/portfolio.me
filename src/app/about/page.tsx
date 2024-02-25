'use client';
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import ProfileGrid from '@/component/common/about/profilegrid';
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12">
      <div className="blur1"></div>
      <div className="grid-card">
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none"
        >
          <Image
            alt="Codernotme"
            className="object-cover"
            height={300}
            src="/images/codernotme.jpg"
            width={300}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-medium text-white/80">Hi I'm</p>
            <Popover placement="bottom" showArrow={true}>
              <PopoverTrigger>
                <Button className="text-medium text-white bg-black/20" color="primary" variant="flat" radius="lg" size="sm">
                  Aryan Bajpai
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="card-about">
                    With a keyboard as my canvas and code as my brushstrokes, I, Aryan Bajpai, paint the future. This 20-year-old tech virtuoso from India blends web development, Python, C, and Next.js into captivating digital experiences. But beyond the realm of code, I weave UI/UX magic, craft stunning visuals, and wield MySQL with masterful precision. A passionate innovator, I merge AI with my skills, forever chasing the thrill of pushing boundaries. Let's connect and explore the limitless possibilities of technology together.</div>
                </div>
              </PopoverContent>
            </Popover>
          </CardFooter>
        </Card>
        <div className="profile-page">
          <ProfileGrid />
        </div>
      </div>
    </main>
  );
}