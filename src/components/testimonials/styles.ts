import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  text-align: center;
  flex-direction: column;
  font-family: "Poppins";
  padding-top: 88px;
  padding-bottom: 120px;
  background-color: rgba(86, 178, 128, 0.15);
`;

export const Opinions = styled.div`
  display: flex;
  justify-content: center;
  gap: 42px;
  margin-top: 24px;
`;

export const item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins";
  padding: 18px;
  border-radius: 8px;
  background-color: #ffffff;

  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.025);
  }

  p {
    font-size: 22px;
    font-weight: normal;
    width: 300px;
    color: #1d293f;
  }

  h4 {
    font-size: 18px;
    font-weight: normal;
    color: #7c8087;
    margin-bottom: 8px;
  }

  .rating {
    width: 120px;
    margin-bottom: 16px;
  }
`;
