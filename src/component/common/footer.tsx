import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(10px);
  bottom: 0;
  height: 40px;
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
