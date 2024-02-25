'use client';
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import Link from "next/link";

export default function Work() {
  return (
    <main className="flex min-h-screen work flex-col items-center justify-between p-24">
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Website</p>
        <h4 className="text-white font-medium text-large">Allotalk.in</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover cursor-pointer"
        src="/img/allotalk-poster.png"
        onClick={() => window.open("https://allotalk.in", "_blank")}
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Image</p>
        <h4 className="text-white font-medium text-large">Mincraft Chracter</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover cursor-pointer"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e42882186661193.6579748bc4c57.png"
        onClick={() => window.open("https://www.behance.net/gallery/186661193/Minecraft-Character", "_blank")}
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Explore More pojects?</p>
        <h4 className="text-white font-medium text-large">Check out my github.</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover cursor-pointer"
        src="/img/github.png"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
        <h4 className="text-black font-medium text-2xl">Tackle Studioz</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover cursor-pointer"
        src="/img/tackle-grad.png"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Check out.</p>
        </div>
        <Button className="text-tiny" onClick={() => window.open('https://www.linkedin.com/company/tackle-studioz/', '_blank')} color="primary" radius="full" size="sm">
          View now
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">UpComing project</p>
        <h4 className="text-white/90 font-medium text-xl">Wanna know more about my upcoming projects?</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover cursor-pointer"
        src="/img/connect.jpg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black cursor-pointer"
            src="/img/connect.jpg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Apply Today</p>
            <p className="text-tiny text-white/60">And join my team.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Join</Button>
      </CardFooter>
    </Card>
  </div>
  </main>
  );
}
