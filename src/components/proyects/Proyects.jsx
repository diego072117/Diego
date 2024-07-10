import { Link } from "react-router-dom";
import { projects } from "../../data/data";
import "./Module.css";

export const Proyects = () => {
  return (
    <section id="proyects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project, index) => (
          <article key={index} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={project.img1} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <Link
                to={`details-proyect/${project.id}`}
                className="btn btn-primary"
                rel="noopener noreferrer"
              >
                See more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
