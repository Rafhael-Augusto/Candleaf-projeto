import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import { GlobalStyle, GlobalH2, GlobalP } from "../GlobalStyles/global";

const Products = () => {
  const navigate = useNavigate();

  return (
    <S.products>
      <GlobalH2>Products</GlobalH2>
      <GlobalP>Order it for you or for your beloved ones </GlobalP>

      <S.itemsList>
        <GlobalStyle onClick={() => navigate("/product")}>
          <img
            src="../src/assets/img/candles/spicedMint.png"
            alt="Spiced Mint candle"
          />
          <h3>Spiced Mint</h3>
          <p>9. 99$</p>
        </GlobalStyle>
        <GlobalStyle onClick={() => navigate("/product")}>
          <img
            src="../src/assets/img/candles/sweetStraweberry.png"
            alt="Sweet Straweberry candle"
          />
          <h3>Sweet Strawberry</h3>
          <p>9. 99$</p>
        </GlobalStyle>
        <GlobalStyle onClick={() => navigate("/product")}>
          <img
            src="../src/assets/img/candles/coolBlueberries.png"
            alt="Cool Blueberries candle"
          />
          <h3>Cool Blueberries</h3>
          <p>9. 99$</p>
        </GlobalStyle>
        <GlobalStyle onClick={() => navigate("/product")}>
          <img
            src="../src/assets/img/candles/juicyLemon.png"
            alt="Juicy Lemon candle"
          />
          <h3>Juicy Lemon</h3>
          <p>9. 99$</p>
        </GlobalStyle>
        <GlobalStyle onClick={() => navigate("/product")}>
          <img
            src="../src/assets/img/candles/freshOrange.png"
            alt="Fresh Orange candle"
          />
          <h3>Fresh Orange</h3>
          <p>9. 99$</p>
        </GlobalStyle>
        <GlobalStyle onClick={() => navigate("/product")}>
          <img
            src="../src/assets/img/candles/fragrantCinnamon.png"
            alt="Fragrant Cinnamon candle"
          />
          <h3>Fragrant Cinnamon</h3>
          <p>9. 99$</p>
        </GlobalStyle>
        <GlobalStyle onClick={() => navigate("/product")}>
          <img
            src="../src/assets/img/candles/summerCherries.png"
            alt="Summer Cherries candle"
          />
          <h3>Summer Cherries</h3>
          <p>9. 99$</p>
        </GlobalStyle>
        <GlobalStyle onClick={() => navigate("/product")}>
          <img
            src="../src/assets/img/candles/cleanLavander.png"
            alt="Clean Lavander candle"
          />
          <h3>Clean Lavander</h3>
          <p>9. 99$</p>
        </GlobalStyle>
      </S.itemsList>
    </S.products>
  );
};

export default Products;
