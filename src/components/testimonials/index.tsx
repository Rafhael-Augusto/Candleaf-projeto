import * as S from "./styles";
import { GlobalH2, GlobalP } from "../GlobalStyles/global";

const Testimonials = () => {
  return (
    <S.Container>
      <GlobalH2>Testimonials</GlobalH2>
      <GlobalP>Some quotes from our happy customers</GlobalP>
      <S.Opinions>
        <S.item>
          <img
            src="../src/assets/img/ratings/people/First.png"
            alt="Profile picture"
          />
          <img
            className="rating"
            src="../src/assets/img/ratings/stars/AlmostFull.svg"
            alt="Stars ratings"
          />
          <p>“I love it! No more air fresheners”</p>
          <h4>Luisa</h4>
        </S.item>
        <S.item>
          <img
            src="../src/assets/img/ratings/people/Second.png"
            alt="Profile picture"
          />
          <img
            className="rating"
            src="../src/assets/img/ratings/stars/FullStar.svg"
            alt="Stars ratings"
          />
          <p>“Recommended for everyone”</p>
          <h4>Edoardo</h4>
        </S.item>
        <S.item>
          <img
            src="../src/assets/img/ratings/people/Third.png"
            alt="Profile picture"
          />
          <img
            className="rating"
            src="../src/assets/img/ratings/stars/AlmostFull.svg"
            alt="Stars ratings"
          />
          <p>“Looks very natural, the smell is awesome”</p>
          <h4>Mart</h4>
        </S.item>
      </S.Opinions>
    </S.Container>
  );
};

export default Testimonials;
