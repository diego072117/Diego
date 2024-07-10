import ME from "../../assets/a.jpg";
import { FaAward } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

import "./Module.css";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>

            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Engineer</h5>
              <small>Completed</small>
            </article>
          </div>
          <p>
            I am Diego Parra, a full-stack developer from Colombia, passionate
            about creating innovative solutions and continuously learning in the
            vast world of software development. My main focus is on developing
            projects that are not only functional but also provide significant
            value and are user-friendly.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
