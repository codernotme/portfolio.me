// Card component

import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  description: string | ReactNode; // Accepts either string or JSX elements
}

const CardContainer = styled.div`
  // Your card container styles here
`;

const Description = styled.div`
  // Styles for the description
`;

const Card: React.FC<CardProps> = ({ description }) => {
  return (
    <CardContainer>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default Card;
