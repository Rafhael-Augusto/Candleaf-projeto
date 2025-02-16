import styled from "styled-components";

interface ContainerProps {
  $gap?: number;
  size?: number;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 28px 0 28px 0;
  gap: ${({ $gap }) => $gap && `${$gap}px`};

  a {
    font-family: "Roboto";
    color: #272727;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const NavLinks = styled.section`
  margin-right: 72px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 240px;
`;

export const Image = styled.img<ContainerProps>`
  width: ${({ width }) => width && `${width}px`};
`;

export const h1 = styled.h1`
  margin: 0;
  color: #56b280;
  font-size: 20px;
`;
