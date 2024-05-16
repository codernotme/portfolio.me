'use client';
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

export default function Portfolio() {
  const [modalOpenIndex, setModalOpenIndex] = useState(-1); // State to track which modal is open, initialized with -1
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Define array of objects containing card information
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Allotalk.in",
      description: "It is a PHP based chatting platform",
      link: "https://allotalk.in",
      content: "It's a PHP based real-time chat application. It is fully functional.",
      image: 'allotalk-poster.png'
    },
    {
      id: 2,
      title: "Kirby Game",
      description: "by using Vite and TypeScript",
      link: "https://kirby-game-ts.vercel.app/",
      content: "This is a simple Kirby-themed game built using Vite for bundling, Vanilla TypeScript for the game logic, and type-checking.",
      image: 'kirby.png'
    },
    {
      id: 3,
      title: "Todo-List",
      description: "Todo list using html css",
      link: "https://codernotme.github.io/todo-list-html/",
      content: "This project serves as a practice exercise for implementing basic concepts of HTML, CSS, and JS to create a Todo-List.",
      image: 'todo.png'
    },
    {
      id: 4,
      title: "Amazone Clone",
      description: "Simple amazon home page clone",
      link: "https://amazon-clone-seven-blush.vercel.app/",
      content: "It is a simple Amazon Home page clone using Html and css",
      image: 'amazon.png'
    },
    {
      id: 5,
      title: "PortXme",
      description: "Portfolio site",
      link: "https://portxme.vercel.app/",
      content: "This is an earlier version of my portfolio website",
      image: 'portxme.png'
    },
    {
      id: 6,
      title: "Portfolio",
      description: "Portfolio site",
      link: "https://github.com/codernotme/portfolio.me",
      content: "For the project codes you can click on the link below",
      image: 'portfolio.png'
    },
    {
      id: 7,
      title: "GitHub",
      description: "GitHub Profile",
      link: "https://github.com/codernotme",
      content: "If you want to see the codes and my other porjects. You can check out my GitHub profile",
      image: 'github.png'
    }
    // Add more objects for additional cards
  ]);

  // Function to shuffle array randomly
  const shuffleArray = (array: { id: number; title: string; description: string; link: string; content: string; image: string; }[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    // Shuffle cards array randomly
    setCards(shuffleArray(cards));
  }, []);

  // Function to handle opening modal for a specific card
  const handleOpenModal = (index: React.SetStateAction<number>) => {
    setModalOpenIndex(index);
    onOpen();
  };

  return (
    <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: 'transparent' }} id="Portfolio">
      <div className="container">
        <div className="row">
          {/* Render cards dynamically */}
          {cards.map((card, index) => (
            <div key={index} className="col-xs-12 col-md-4">
              <article className="card" style={{ backgroundColor: '#111111' }}>
                {/* Select image based on card */}
                <img className="card-img-top img-fluid cursor-pointer" src={`/img/${card.image}`} alt={card.title} />
                <div className="card-block">
                  <h4 className="card-title"><Button onPress={() => handleOpenModal(index)} color={'primary'}>{card.title}</Button></h4>
                  <p className="card-text">{card.description}</p>
                </div>
                <Modal isOpen={isOpen && modalOpenIndex === index} onOpenChange={onOpenChange} style={{backgroundColor: '#000',color: 'white', border:'2px solid #fff'}}
                backdrop='blur' motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    },
                    exit: {
                      y: -20,
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        ease: "easeIn",
                      },
                    },
                  }
                }}
                  placement='center'>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">{card.title}</ModalHeader>
                        <ModalBody>
                          <p>{card.content}</p>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="danger" variant="light" onPress={onClose}>
                            Close
                          </Button>
                          <Button color="primary" onPress={() => window.open(card.link, "_blank")}>
                            Link
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
