import React, { ReactNode } from 'react';
import styled from 'styled-components';
interface CardProps {
  description: string | ReactNode;
}

const CardContainer = styled.div`
`;

const Description = styled.div`
`;

const Card: React.FC<CardProps> = ({ description }) => {
  return (
    <CardContainer>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default Card;
