import { useEffect } from "react";

function Timer({ secondRemaining, dispatch }) {
  const min = Math.floor(secondRemaining / 60);
  const sec = Math.floor(secondRemaining % 60);
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "time", payload: secondRemaining });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className=" timer">
      {min <= 9 ? `0${min}` : min}:{sec <= 9 ? `0${sec}` : sec}
    </div>
  );
}

export default Timer;
