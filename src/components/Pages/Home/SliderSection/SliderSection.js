/* eslint-disable react/prop-types */
import { useContext } from "react";
import DataContext from "../../../../DataContext";
import "./Slider.css";
import Slider from "./Slider";

const SliderSection = (props) => {
  const { person, deleteUsers, imageHandler } = useContext(DataContext);

  const mappedPerson = person.map((data) => {
    return (
      <div key={data.id} className="slider-flex">
        <button className="delete-btn" onClick={() => deleteUsers(data.id)}>
          ❎
        </button>
        <img
          src={data.image}
          id={data.id}
          alt="person"
          className="slider-image"
          onClick={imageHandler}
        />
        <p className="data-name">{data.name}</p>
      </div>
    );
  });

  return (
    <section>
      <div className="slider-section">{mappedPerson}</div>
      <Slider onClick={props.onClick} state={props.state} />
    </section>
  );
};

export default SliderSection;
