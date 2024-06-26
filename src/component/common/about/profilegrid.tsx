import React from 'react';
import Card from '@/component/common/about/card';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Title = styled.h2`
  color: #fff;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  font-size: 24px;
  margin-top: 0;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: 0;
    left: 0;
    background-color: #FFD700;
    transition: height 0.3s ease-in-out;
  }
  &:hover:after {
    height: 10px;
  }
`;

const CardContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url('/images/background-card.jpg');
  background-size: cover;
  padding: 20px;
  border: 0.5px solid #ffff;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ProfileGrid = () => {
  const data = [
      {
        "title": "Full-Stack Mastery",
        "description": "I leverage my expertise in front-end (UI/UX), back-end development, and APIs (Python focus) to craft exceptional web experiences."
      },
      {
        "title": "Web Development Virtuoso",
        "description": "I specialize in building robust and user-friendly web applications utilizing modern technologies like HTML5, CSS3, JavaScript (React.js, Next.js), Node.js (Express), and databases (MongoDB, MySQL)."
      },
      {
        "title": "AI & Machine Learning Expertise",
        "description": "Beyond coding, I possess a passion for AI. I create cutting-edge solutions using technologies like chatbots (similar to ChatGPT), natural language processing, and computer vision. Let's turn your ideas into intelligent realities."
      },
    {
      title: 'Tech Stack', description: (
        <ImageContainer>
          <img src="https://img.icons8.com/color/64/000000/html-5.png" alt="HTML5" />
          <img src="https://img.icons8.com/color/64/000000/css3.png" alt="CSS3" />
          <img src="https://img.icons8.com/color/64/000000/javascript.png" alt="JavaScript" />
          <img src="https://img.icons8.com/plasticine/64/000000/react.png" alt="React" />
          <img src="https://img.icons8.com/color/64/000000/nodejs.png" alt="Node.js" />
          <img src="https://img.icons8.com/color/64/000000/python.png" alt="Python" />
          <img src="https://img.icons8.com/color/64/000000/api.png" alt="API" />
          <img src="https://img.icons8.com/color/64/000000/artificial-intelligence.png" alt="AI" />
          <img src="https://img.icons8.com/color/64/000000/figma.png" alt="Design" />
          <img src="https://img.icons8.com/color/64/000000/adobe-illustrator.png" alt="Graphic Design" />
          <img src="https://img.icons8.com/color/64/000000/mysql.png" alt="MySQL" />
        </ImageContainer>
      )
    },
    {
      title: 'Cloud Computing', description: (
        <ImageContainer>
          <img src="https://img.icons8.com/color/64/000000/amazon-web-services.png" alt="AWS" />
          <img src="https://img.icons8.com/color/64/000000/google-cloud-platform.png" alt="Google Cloud" />
        </ImageContainer>
      )
    },
  ];

  return (
    <GridContainer>
      {data.map((item, index) => (
        <CardContainer key={index}>
          <Title>{item.title}</Title>
          <Card description={typeof item.description === 'string' ? item.description : item.description} />
        </CardContainer>
      ))}
    </GridContainer>
  );
};

export default ProfileGrid;
