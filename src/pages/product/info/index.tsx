import * as S from "./styles";

const Info = () => {
  return (
    <S.Container>
      <S.ProductImg>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/41ji-l6JoJL._UXNaN_FMjpg_QL85_.jpg"
            alt=""
          />
        </div>
        <div>
          <p>
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
          </p>
          <h5>🚚 FREE SHIPPING</h5>
        </div>
      </S.ProductImg>

      <S.Info>
        <S.PriceQuantity>
          <h3>$ 9.99</h3>

          <S.Quantity>
            <h4>Quantity</h4>
            <div>
              <S.Sub>-</S.Sub>
              <p>1</p>
              <S.Add>+</S.Add>
            </div>
          </S.Quantity>
        </S.PriceQuantity>

        <S.PurchaseMethod>
          <S.Once>
            <h2>Spiced Mint Candleaf&reg;</h2>
            <input id="oneTime" type="radio" name="receive" />
            <label htmlFor="oneTime">One time purchase</label>
          </S.Once>

          <S.Weekly>
            <input id="Weekly" type="radio" name="receive" />
            <label htmlFor="Weekly">Subscribe and delivery every </label>
            <select>
              <option value="">6 weeks</option>
              <option value="5">5 weeks</option>
              <option value="4">4 weeks</option>
              <option value="3">3 weeks</option>
              <option value="2">2 weeks</option>
              <option value="1">1 week</option>
            </select>
            <p>
              Subscribe now and get the 10% of discount on every recurring
              order. The discount will be applied at checkout.{" "}
              <a href="#">See details</a>
            </p>
          </S.Weekly>

          <S.AddToCartButton>
            <img src="../src/assets/img/nav/whiteCart.png" alt="Cart" /> + Add
            to cart
          </S.AddToCartButton>
        </S.PurchaseMethod>
      </S.Info>
    </S.Container>
  );
};

export default Info;
