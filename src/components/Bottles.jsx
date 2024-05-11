import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bbottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("../../public/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  return (
    <div>
      <h1>Available Bottles : {bottles.length}</h1>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
