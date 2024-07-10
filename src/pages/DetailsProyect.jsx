import { useParams } from "react-router-dom";
import { projects } from "../data/data";
import { Slider } from "../components/slider/Slider";

export const DetailsProyect = () => {
  const { id } = useParams();
  const projectById = projects.find((project) => project.id === parseInt(id));

  return (
    <div>
      <Slider project={projectById} />
    </div>
  );
};
