function EndScreen({ points, maxPointPossible, dispatch }) {
  //   console.log({ points, maxPointPossible });
  return (
    <>
      <p className="result">
        You scored
        <strong
          style={
            points < maxPointPossible / 2
              ? { color: "red" }
              : { color: "green" }
          }
        >
          {" "}
          {points}
        </strong>
        out of /{maxPointPossible}
      </p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        restart the quiz
      </button>
    </>
  );
}

export default EndScreen;
