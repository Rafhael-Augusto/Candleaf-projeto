import * as S from "./styles";

const AboutProduct = () => {
  return (
    <S.about>
      <S.fac>
        <h2>Clean and fragrant soy wax</h2>
        <p>Made for your home and for your wellness</p>

        <ul>
          <li>
            <strong>Eco-sustainable:</strong> All recyclable materials, 0% CO2
            emissions
          </li>
          <li>
            <strong>Hypoallergenic:</strong> 100% natural, human friendly
            ingredients
          </li>
          <li>
            <strong>Handmade:</strong> All candles are craftly made with love.
          </li>
          <li>
            <strong>Long burning:</strong> No more waste. Created for last long.
          </li>
        </ul>

        <button>Learn more</button>
      </S.fac>

      <div>
        <img
          src="../src/assets/img/candles/TwoCandles.png"
          alt="Spiced mint candle"
        />
      </div>
    </S.about>
  );
};

export default AboutProduct;
