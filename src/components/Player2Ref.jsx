//  to overcome and good way to write code for this type problem is using ref we can do that

import { useRef, useState } from "react";

export default function Player2Ref() {
  const [enteredName, setEnteredName] = useState("");
  const playerName = useRef();

  const handleClick = () => {
    setEnteredName(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {enteredName ? enteredName : "please enter your Name"} </h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
