import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/diego-alexander-parra-calder%C3%B3n-81790a254/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/diego072117" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=573206792531"
        target="_blank"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=parracalderond9@gmail.com"
        target="_blank"
      >
        <MdMarkEmailRead />
      </a>
    </div>
  );
};
