import styled from "styled-components";

export const GlobalStyle = styled.div`
  display: inline-block;
  background-color: #ffffff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  font-family: "Poppins";
  font-size: 0px;
  cursor: pointer;

  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  img {
    background-color: #f7f8fa;
  }

  h3 {
    text-align: left;
    color: #1d293f;
    font-size: 16px;
    font-weight: lighter;
    padding: 10px 26px 0 26px;
  }
  p {
    text-align: right;
    color: #56b280;
    font-family: "Roboto";
    font-size: 20px;
    font-weight: medium;
    padding: 0 26px 16px 26px;
  }
`;

export const GlobalH2 = styled.h2`
  font-family: "Poppins";
  font-size: 40px;
  font-weight: normal;
  color: #0b254b;
`;

export const GlobalP = styled.p`
  font-family: "Poppins";
  font-size: 18px;
  font-weight: normal;
  color: #5e6e89;
  margin-top: 8px;
`;
