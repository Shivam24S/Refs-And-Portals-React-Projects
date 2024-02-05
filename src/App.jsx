import Player from "./components/Player.jsx";
import Player2Ref from "./components/Player2Ref.jsx";
import TimeChallenger from "./components/TimeChallenger.jsx";

function App() {
  return (
    <>
      {/* using typical method for handling input */}
      {/* <Player /> */}

      {/* using ref method for handling input */}
      <Player2Ref />

      <div id="challenges">
        <TimeChallenger title={"Easy"} time={1} />
        <TimeChallenger title={"Not Easy"} time={5} />
        <TimeChallenger title={"Getting Tough"} time={10} />
        <TimeChallenger title={"Pro Only"} time={15} />
      </div>
    </>
  );
}

export default App;
