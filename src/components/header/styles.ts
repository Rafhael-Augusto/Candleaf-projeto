import styled from "styled-components";

interface ContainerProps {
  $gap?: number;
  size?: number;
}

export const Header = styled.header`
  background-color: #ffffff;
`;

export const Image = styled.img<ContainerProps>`
  width: ${({ width }) => width && `${width}px`};
`;

export const NavLinks = styled.section`
  margin-right: 56px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 240px;
`;

export const h1 = styled.h1`
  margin: 0;
  color: #56b280;
  font-size: 20px;
`;

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

export const HeroSection = styled.section`
  padding: 200px 355px 200px 355px;
  background-image: url("../src/assets/img/bg-image.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const HeroContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 128px 60px 128px;
  background-color: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(6px);

  h3 {
    font-size: 40px;
    font-weight: normal;
    font-family: "Poppins";
    color: #1d252c;
  }

  p {
    text-align: center;
    font-size: 18px;
    font-family: "Roboto";
    width: 500px;
    color: #1d252c;
  }

  button {
    margin-top: 46px;
    width: 310px;
    height: 40px;
    color: #ffffff;
    background-color: #56b280;
    border: none;
    border-radius: 8px;
    font-size: medium;
    cursor: pointer;

    transition: transform 0.4s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  img {
    margin-right: 14px;
  }
`;
