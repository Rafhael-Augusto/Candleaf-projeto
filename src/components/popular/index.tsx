import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { GlobalStyle, GlobalH2, GlobalP } from "../GlobalStyles/global";

const Popular = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <GlobalH2>Popular</GlobalH2>
      <GlobalP>Our top selling product that you may like</GlobalP>

      <S.PopularList>
        <GlobalStyle onClick={() => navigate("/product")}>
          <img src="../src/assets/img/candles/spicedMint.png" alt="" />
          <h3>Spiced Mint</h3>
          <p>9. 99$</p>
        </GlobalStyle>
        <GlobalStyle onClick={() => navigate("/product")}>
          <img src="../src/assets/img/candles/sweetStraweberry.png" alt="" />
          <h3>Sweet Straweberries</h3>
          <p>9. 99$</p>
        </GlobalStyle>
        <GlobalStyle onClick={() => navigate("/product")}>
          <img src="../src/assets/img/candles/coolBlueberries.png" alt="" />
          <h3>Cool Blueberries</h3>
          <p>9. 99$</p>
        </GlobalStyle>
        <GlobalStyle onClick={() => navigate("/product")}>
          <img src="../src/assets/img/candles/juicyLemon.png" alt="" />
          <h3>Juicy Lemon</h3>
          <p>9. 99$</p>
        </GlobalStyle>
      </S.PopularList>
    </S.Container>
  );
};

export default Popular;
