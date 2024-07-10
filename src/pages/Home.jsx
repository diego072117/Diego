import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { Header } from "../components/header/Header";
import { Nav } from "../components/nav/Nav";
import { Proyects } from "../components/proyects/Proyects";
import { Skills } from "../components/skils/Skills";

export const Home = () => {
  return (
    <div className="container-portfolio">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Proyects />
      {/* <Slider /> */}
      <Contact />
      <div className="footer"></div>
    </div>
  );
};
