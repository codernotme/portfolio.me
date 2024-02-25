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
  /* Add text effect styles */
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: 0;
    left: 0;
    background-color: #FFD700; /* Change to your desired color */
    transition: height 0.3s ease-in-out;
  }
  &:hover:after {
    height: 10px; /* Adjust the height of the effect on hover */
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
    { title: 'Artistry in Code', description: 'Full Stack Sorcerer, AI Alchemist, UI/UX Artisan, API Enchanter, Pythonista' },
    { title: 'Web Symphony', description: 'I specialize in conjuring robust and user-centric web applications, casting spells with: HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, Express, MongoDB, MySQL' },
    { title: 'AI Wizardry', description: 'Not just a coder, but an AI enthusiast! My expertise extends to crafting cutting-edge AI tools, from potent chatbots like ChatGPT to applications in natural language processing, computer vision, and beyond. Lets transform visionary ideas into sentient solutions!' },
    { title: 'Tech Tapestry', description: (
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
    ) },
    { title: 'Cloud Harmony', description: (
      <ImageContainer>
        <img src="https://img.icons8.com/color/64/000000/amazon-web-services.png" alt="AWS" />
        <img src="https://img.icons8.com/color/64/000000/google-cloud-platform.png" alt="Google Cloud" />
      </ImageContainer>
    ) },
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
