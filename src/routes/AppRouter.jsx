import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { DetailsProyect } from "../pages/DetailsProyect";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details-proyect/:id" element={<DetailsProyect />} />
      </Routes>
    </>
  );
};
