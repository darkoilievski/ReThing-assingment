/* eslint-disable prettier/prettier */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../../../DataContext";
import "./SecondPage.css";

const Input = () => {
  const [name, setName] = useState("");
  const { person } = useContext(DataContext);
  let navigate = useNavigate();
  const changeHandlerName = (e) => {
    setName(e.target.value);
  };

  const submitHandler = () => {
    const newName = name;
    if (newName === "") {
      alert("Please enter your full name");
    } else {
      person.push({
        id: 5,
        name: newName,
        image:
          "https://images.unsplash.com/photo-1620415063111-5cff67c31e00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"
      });
      navigate("/");
    }
  };

  return (
    <section>
      <h3>Add a new person</h3>
      <label>
        <strong>Full Name</strong>
      </label>
      <input
        type="text"
        placeholder="Enter your name here"
        className="input"
        onChange={changeHandlerName}
      />
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </section>
  );
};

export default Input;
