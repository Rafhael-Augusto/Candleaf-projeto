import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  position: relative;

  padding: 100px 165px 120px 165px;
  background-color: #272727;
  color: #e1e1e1;
  font-family: "Poppins";

  h2 {
    font-size: 32px;
  }

  p {
    color: #ffffff;
    font-weight: normal;
    width: 270px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const Links = styled.div`
  display: flex;
  gap: 128px;
  margin-top: 32px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;

    a {
      color: #e1e1e1;
    }
  }
`;

export const First = styled.li`
  color: #56b280;
`;

export const StraightLine = styled.hr`
  border: 1.8px solid #ffffff;
  border-radius: 8px;
  margin-bottom: 24px;
  width: 1110px;
  position: absolute;
  top: 80px;
`;
