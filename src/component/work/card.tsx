'use client';
import React, { useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";


export default function Portfolio() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: 'transparent' }} id="Portfolio">
      <div className="container" >
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <article className="card" style={{ backgroundColor: '#111111' }}>
              <img className="card-img-top img-fluid cursor-pointer" src="/img/allotalk-poster.png" alt="allotalk" onClick={() => window.open("https://allotalk.in", "_blank")}
              />
              <div className="card-block">
                <h4 className="card-title"> Allotalk.in </h4>
                <p className="card-text"> It is a PHP based chatting platfrom</p>
              </div>
            </article>
          </div>
          <div className="col-xs-12 col-md-4">
            <article className="card" style={{ backgroundColor: '#111111' }}>
              <img className="card-img-top img-fluidcursor-pointer" src="/img/robo.png" alt="robot" />
              <div className="card-block">
                <h4 className="card-title"> 3d Robo </h4>
                <p className="card-text"> An AI generated 3d robot </p>
              </div>
            </article>
          </div>
          <div className="col-xs-12 col-md-4">
            <article>
              <Card className="col-span-12 sm:col-span-4 h-[800px]">
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
            </article>
          </div>
        </div>
        <div className="row top-buffer">
          <div className="col-xs-12 col-md-4">

            <article className="card" style={{ backgroundColor: '#111111' }}>
              <div className="card-block">
                <h4 className="card-title"> Minecraft</h4>
                <p className="card-text"> An AI generated minecraft character in wooden theme in 3D </p>
              </div>
              <img className="card-img-bottom img-fluid cursor-pointer" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e42882186661193.6579748bc4c57.png" alt="minecraft" onClick={() => window.open("https://www.behance.net/gallery/186661193/Minecraft-Character", "_blank")} />
            </article></div>
          <div className="col-xs-12 col-md-4">
            <article>
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
              </Card></article>
          </div>
          <div className="col-xs-12 col-md-4">
            <article>
              <Card isFooterBlurred className="w-full h-[500px] col-span-12 sm:col-span-7">
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
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
