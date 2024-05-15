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
                    I am a Full Stack Developer with expertise in UI/UX. I have
                    experience working with Next.js, React, MongoDB, Python, Java,
                    and C++, and I am currently seeking a position where I can
                    utilize my diverse skillset. I am open to Full-Stack, Front-End, or
                    Software Development roles in a collaborative team
                    environment. My goal is to build innovative applications and
                    contribute to a company that values mutual development. I
                    am eager to learn and grow within such a company.
                  </div>
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