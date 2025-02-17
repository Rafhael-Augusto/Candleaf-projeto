import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Roboto";

  margin-top: 48px;
  margin-bottom: 114px;
`;

export const ProductImg = styled.div`
  display: flex;
  flex-direction: column;

  div {
    img {
      height: 433px;
      width: 540px;
      background-color: black;
      margin-right: 0px;
      margin-bottom: 22px;

      border-radius: 16px;
    }

    p,
    h5 {
      margin-right: 10px;
      margin-bottom: 20px;
      width: 550px;
    }

    p {
      font-size: 21px;
      font-family: "Poppins";
    }

    h5 {
      color: #56b280;
      font-size: 20px;
    }
  }
`;

export const PriceQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 300px;
  margin-right: 24px;
  margin-left: 24px;

  h3 {
    font-size: 26px;
    color: #56b280;
    font-family: "Poppins";
  }
`;
export const Add = styled.button`
  padding: 2px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  background-color: transparent;
  color: #56b280;
  cursor: pointer;
`;

export const Sub = styled.button`
  padding: 2px;
  margin-bottom: 3px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  background-color: transparent;
  color: #56b280;
  cursor: pointer;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
    gap: 6px;
    border: 1px solid #56b280;
  }

  p {
    font-size: 24px;
  }
`;

export const PurchaseMethod = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  text-align: left;
  margin-bottom: 128px;
  margin-right: 120px;

  label {
    color: #272727;
    font-weight: bold;
  }

  p {
    width: 320px;
    margin-top: 12px;
  }

  input {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 4px solid #dbdbdb;
    border-radius: 50%;
    vertical-align: middle;
    margin-bottom: 4px;
    margin-right: 8px;
    cursor: pointer;

    &:checked {
      background-color: #87d6ac;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 64px;

  h2 {
    margin-top: 100px;
    margin-right: 462px;
    color: #272727;
    font-size: 26px;
  }
`;

export const Once = styled.div`
  padding: 20px 20px 0 20px;

  h2 {
    margin-bottom: 34px;
    position: absolute;
    top: -80px;
    right: 20px;
  }
`;

export const Weekly = styled.div`
  border: 1px solid #56b280;
  border-radius: 8px;
  padding: 20px;

  label {
    color: #272727;
    font-weight: bold;
  }

  select {
    color: #272727;
    font-weight: bold;
    border: 1px solid #e7e7e7;
    font-size: 15px;
    option {
      color: #272727;
      font-weight: bold;
    }
  }

  p {
    color: #818181;

    a {
      color: #56b280;
    }
  }
`;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;

  background-color: #56b280;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 20px;
  cursor: pointer;

  img {
    margin-right: 16px;
  }
`;

export const CandleInfo = styled.div`
  padding: 22px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
`;
