import Options from "./Options";
import Progress from "./Progress";
function Question({
  point,
  maxPointPossible,
  index,
  numQuestions,
  question,
  dispatch,
  answer,
}) {
  return (
    <div>
      <Progress
        numQuestions={numQuestions}
        index={index}
        answer={answer}
        maxPointPossible={maxPointPossible}
        point={point}
      />
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
      {answer !== null && (
        <button
          className="btn btn-ui"
          onClick={() => {
            index === numQuestions - 1
              ? dispatch({ type: "finish" })
              : dispatch({ type: "newQuestion" });
          }}
        >
          {index === numQuestions - 1 ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
}

export default Question;
// import Options from "./Options";
// function Question({ question, index, answer, setQuiz }) {
//   return (
//     <div>
//       <h4>{question.question}</h4>
//       <Options question={question} setQuiz={setQuiz} answer={answer} />
//       {!!answer && (
//         <button
//           className="btn"
//           onClick={() =>
//             setQuiz((quiz) => {
//               return { ...quiz, index: index + 1, answer: 0 };
//             })
//           }
//         >
//           Next
//         </button>
//       )}
//     </div>
//   );
// }

// export default Question;
