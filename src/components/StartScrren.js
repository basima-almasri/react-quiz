function StartScrren({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2> Welcome to the React Quiz!!</h2>
      <h3>{numQuestions} question to est your react mastery</h3>
      <button
        className="btn btn--ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScrren;
// function StartScrren({ numQuestions, setQuiz }) {
//   return (
//     <div className="start">
//       <h2> Welcome to the React Quiz!!</h2>
//       <h3>{numQuestions} question to est your react mastery</h3>
//       <button
//         className="btn btn--ui"
//         onClick={() =>
//           setQuiz((quiz) => {
//             return { ...quiz, status: "active" };
//           })
//         }
//       >
//         Let's start
//       </button>
//     </div>
//   );
// }

// export default StartScrren;
