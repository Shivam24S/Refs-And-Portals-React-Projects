import { forwardRef, useImperativeHandle, useRef } from "react";

// createPortal used for rendering component somewhere else where we call not that place
import { createPortal } from "react-dom";

const ResultDialog = forwardRef(function ResultDialog(
  { time, onReset, remainingTime },
  ref
) {
  //   using useImpretivehandle
  //  const dialogRef = useRef();
  // useImperativeHandle(ref, function () {
  //   return {
  //     open() {
  //       dialogRef.current.showModal();
  //     },
  //   };
  // });

  const userLost = remainingTime <= 0;

  const formattedTime = (remainingTime / 1000).toFixed(2);

  const score = Math.round((remainingTime / (time * 1000)) * 100);
  return createPortal(
    // when you using useImperativeHandle then you have to pass ref like this
    // <dialog ref={dialogRef} className="result-modal" open>

    <dialog ref={ref} className="result-modal">
      {userLost && <h2> you Lost the game!</h2>}
      {!userLost && <h2> your score is {score}</h2>}
      <p>
        the target time was <strong>{time}</strong> seconds{" "}
      </p>
      <p>
        you have stopped at <strong>{formattedTime}s time left</strong>{" "}
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultDialog;
