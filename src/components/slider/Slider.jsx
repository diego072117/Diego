// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Module.css";

export const Slider = ({ project }) => {
  if (!project)
    return (
      <div className="loader">
        {/* <Loader /> */}
        Loading...
      </div>
    );
  console.log(project);
  return (
    <section id="testimonials">
      <h2>{project.title}</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {project.imgs.map((img, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
            <h5 className="client__name">
              <span className="stack">Stack:</span>
              {project.stock}
            </h5>
            <small className="client__review">{project.description}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
