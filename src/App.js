/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./DataContext";
import Footer from "./components/Pages/Footer/Footer";
import Header from "./components/Pages/Home/Header/Header";
import MiddleSection from "./components/Pages/Home/MiddleSection/MiddleSection";
import SliderSection from "./components/Pages/Home/SliderSection/SliderSection";
import Testimonials from "./components/Pages/Home/Testimonials/Testimonials";
import SecondPage from "./components/Pages/SecondPage/SecondPage";
import Navbar from "./components/Pages/Navbar/Navbar";
import "./App.css";

const App = () => {
  const { person } = useContext(DataContext);
  const id = person.map((data) => data.id);
  const [navigateState, setNavigateState] = useState(id);
  let navigate = useNavigate();

  const returnHomepageHandler = () => {
    navigate("/");
  };

  const pageOneHandler = () => {
    navigate("/SecondPage");
  };

  const moreDetailsHandler = (e) => {
    navigate("/SecondPage");
    setNavigateState(e.target.src);
  };

  return (
    <main>
      <Navbar onClick={returnHomepageHandler} click={pageOneHandler} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MiddleSection />
              <SliderSection onClick={moreDetailsHandler} state={navigateState} />
              <Testimonials />
            </>
          }
        />
        <Route path="/SecondPage" element={<SecondPage state={navigateState} />} />
      </Routes>
      <Footer />
    </main>
  );
};
export default App;
