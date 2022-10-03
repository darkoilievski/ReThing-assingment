/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./Slider.css";
import DataContext from "../../../../DataContext";

const Slider = (props) => {
  const { person, index, clickIndex, leftArrowHandler, rightArrowHandler } =
    useContext(DataContext);

  return (
    <>
      <div className="slider">
        <button onClick={leftArrowHandler} className="left-btn">
          ⬅️
        </button>
        <img
          src={person.map((img) => img.image)[index || clickIndex]}
          alt="slider"
          className="slider-img"
          onClick={props.onClick}
        />
        <button onClick={rightArrowHandler} className="right-btn">
          ➡️
        </button>
      </div>
      <div className="details-section">
        <p className="slider-text">
          Click on the image in the slider to see more details about the person
        </p>
      </div>
    </>
  );
};

export default Slider;
