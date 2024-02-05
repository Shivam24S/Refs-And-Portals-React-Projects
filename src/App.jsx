import Player from "./components/Player.jsx";
import Player2Ref from "./components/Player2Ref.jsx";

function App() {
  return (
    <>
      {/* using typical method for handling input */}
      {/* <Player /> */}

      {/* using ref method for handling input */}
      <Player2Ref />

      <div id="challenges"></div>
    </>
  );
}

export default App;
