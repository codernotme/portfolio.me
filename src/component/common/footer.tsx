import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  z-index: 100;
`;

const Text = styled.p`
  color: white;
  text-align: center;
  margin: 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Text>@Made by Aryan Bajpai</Text>
    </FooterContainer>
  );
};

export default Footer;
