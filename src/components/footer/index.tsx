import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <div>
          <S.StraightLine />
          <S.Logo>
            <img src="../src/assets/img/nav/IconFooter.png" alt="" />
            <h2>Candleaf</h2>
          </S.Logo>
          <p>Your natural candle made for your home and for your wellness.</p>
        </div>

        <S.Links>
          <ul>
            <S.First>Discovery</S.First>
            <li>
              <a href="">New season</a>
            </li>
            <li>
              <a href="">Most searched</a>
            </li>
            <li>
              <a href="">Most selled</a>
            </li>
          </ul>

          <ul>
            <S.First>About</S.First>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Shipping</a>
            </li>
            <li>
              <a href="">Affiliate</a>
            </li>
          </ul>

          <ul>
            <S.First>Info</S.First>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Privacy Policies</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
          </ul>
        </S.Links>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
