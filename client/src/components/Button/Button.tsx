import React from 'react';
import styled from 'styled-components';

interface Props {
  href?: string
  text: string
}

const Wrapper = styled.a`
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  font-size: 3rem;
  color: #c3c5c0;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
  border: 1px solid #c3c5c0;
  border-radius: 5px;
  padding: 0.35em 1.75em 0.35em 1.75em;
`;

const Button : React.FC<Props> = ({ href, text }) => {
  return (
    <Wrapper href={href}>
      {text}
    </Wrapper>
  );
}

export default Button;