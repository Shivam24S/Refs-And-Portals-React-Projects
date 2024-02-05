// using typical method as you can see for this short functionality we have to write that much code
//  to overcome and good way to write code for this type problem is using ref we can do that

import { useState } from "react";

export default function Player() {
  const [enteredName, setEnteredName] = useState("");
  const [name, setName] = useState(false);

  const handleClick = () => {
    setName(true);
  };

  return (
    <section id="player">
      <h2>Welcome {name ? enteredName : "unknown entity"}</h2>
      <p>
        <input
          type="text"
          value={enteredName}
          onChange={(e) => {
            setEnteredName(e.target.value);
            setName(false);
          }}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
