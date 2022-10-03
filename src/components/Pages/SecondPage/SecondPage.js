import { useContext } from "react";
import DataContext from "../../../DataContext";
import Input from "./Input";
import "./SecondPage.css";

const SecondPage = (props) => {
  const { person } = useContext(DataContext);
  const show = person.filter((data) => data.image === props.state);

  return show.map((item) => {
    return (
      <div key={item.id} className="secondPage-section">
        <img src={item.image} alt="person" className="secondPage-image" />
        <p className="name">
          <strong>Name:</strong> {item.name}
        </p>
        <p className="description">
          <strong>Description:</strong> {item.description}
        </p>
        <Input />
      </div>
    );
  });
};

export default SecondPage;
