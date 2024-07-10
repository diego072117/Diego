import { Cta } from "./Cta";
import ME from "../../assets/me-1.png";
import "./Module.css";
import { HeaderSocials } from "./HeaderSocials";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Diego Parra</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
