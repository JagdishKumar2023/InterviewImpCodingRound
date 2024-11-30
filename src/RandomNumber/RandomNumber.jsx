import { useState } from "react";

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 7) + 1;
    setRandomNumber(randomNum);
  };

  return (
    <div>
      <h1>Generate Number:{randomNumber}</h1>
      <button onClick={generateRandomNumber}>Generate number</button>
    </div>
  );
};

export default RandomNumber;
