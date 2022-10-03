/* eslint-disable prettier/prettier */
import { createContext, useEffect, useState } from "react";
import data from "../src/data.json";

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [person, setPerson] = useState(data);
  const [index, setIndex] = useState(0);
  const [clickIndex, setClickIndex] = useState(0);

  useEffect(() => {
    fetch(data)
      .then((res) => res.json())
      .then((data) => setPerson(data))
      .catch((err) => console.log(err));
  }, []);

  const images = person.map((img) => img.image);

  const leftArrowHandler = () => {
    const firstSlide = index === 0;
    const newIndex = firstSlide ? images.length - 1 : index - 1;
    setIndex(newIndex);
  };
  const rightArrowHandler = () => {
    const lastSlide = index === images.length - 1;
    const newIndex = lastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  const imageHandler = (e) => {
    setClickIndex(e.currentTarget.id);
  };

  const deleteUsers = (e) => {
    for (let i = 0; i < person.length; i++) {
      if (person[i].id === e) {
        console.log(e, person[i].id);
        person.splice(i, 1);
        setPerson((prevValue) => {
          return [...prevValue];
        });
      }
    }
  };

  return (
    <DataContext.Provider
      value={{
        person,
        setPerson,
        images,
        clickIndex,
        index,
        leftArrowHandler,
        rightArrowHandler,
        imageHandler,
        deleteUsers
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
