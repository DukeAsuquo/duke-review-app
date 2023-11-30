import { useState } from "react";
import people from "./data.js";
import { FaQuoteRight } from "react-icons/fa";
import { IoArrowBackCircleSharp, IoArrowForwardCircle } from "react-icons/io5";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      return randomNumber;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <article>
        <div className="review">
          <div className="img-container">
            <img className="person-img" src={image}></img>
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div>
            <button className="prev-btn" onClick={prevPerson}>
              <IoArrowBackCircleSharp />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <IoArrowForwardCircle />
            </button>
          </div>
          <div className="btn btn-hipster" onClick={randomPerson}>
            Suprise Me!
          </div>
        </div>
      </article>
    </main>
  );
};
export default App;
