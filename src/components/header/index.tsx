import { Link } from "react-router-dom";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.NavLinks>
        <S.Container $gap={8}>
          <Link to="/home">
            <S.Image
              width={34}
              src="../src/assets/img/nav/icon.png"
              alt="Candleaf logo"
            />
          </Link>
          <Link to="/home">
            <S.h1>Candleaf</S.h1>
          </Link>
        </S.Container>

        <S.Container $gap={128}>
          <Link to="/home">Discovery</Link>
          <Link to="/home">About</Link>
          <Link to="/home">Contact us</Link>
        </S.Container>

        <S.Container $gap={12}>
          <Link to="/home">
            <S.Image
              width={26}
              src="../src/assets/img/nav/profile.png"
              alt="Profile"
            />
          </Link>
          <Link to="/cart">
            <S.Image
              width={26}
              src="../src/assets/img/nav/cart.png"
              alt="Cart"
            />
          </Link>
        </S.Container>
      </S.NavLinks>

      <S.HeroSection>
        <S.HeroContent>
          <img src="../src/assets/img/hero-title.png" alt="Seedling emoji" />
          <h3>The nature candle</h3>
          <p>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments{" "}
          </p>

          <div>
            <button>Discover our collection</button>
          </div>
        </S.HeroContent>
      </S.HeroSection>
    </S.Header>
  );
};

export default Header;
