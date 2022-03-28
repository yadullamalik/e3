import { Routes, Route } from "react-router-dom";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { Home } from "../Components/Home/Home";
import { Mystery } from "../Components/Mystery/mystery";
// import { Section } from "../Components/Section/Section";
// import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
// import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";
import { Data } from "../uploadData/data";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mystery" element={<Mystery/>} />
        <Route exact path="/products/:id" element={<BookDetailsPage/>} />
      </Routes>
    </>
  );
};
