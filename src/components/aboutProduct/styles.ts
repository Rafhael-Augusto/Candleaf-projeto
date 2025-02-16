import styled from "styled-components";

export const about = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f7f8fa;
  padding-top: 140px;

  h2 {
    width: 350px;
    font-family: "Poppins";
    font-weight: normal;
    font-size: 40px;
    color: #1d252c;
  }

  img {
    margin-top: 16px;
  }
`;

export const fac = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 240px;
  margin-right: 64px;

  p {
    color: #56b280;
    font-family: "Poppins";
    font-weight: normal;
    font-size: 16px;
    margin-bottom: 38px;
  }

  ul {
    margin-left: 23px;
    list-style-image: url("../src/assets/img/Check.png");
  }

  li {
    font-family: "Poppins";
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 16px;
  }

  button {
    margin-top: 68px;
    height: 40px;
    width: 200px;
    color: #ffffff;
    background-color: #56b280;
    font-family: "Roboto";
    font-size: 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    transition: transform 0.4s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
