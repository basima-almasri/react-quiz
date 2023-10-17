function Options({ question, dispatch, answer }) {
  const title = question.question;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          disabled={answer !== null}
          className={`btn btn-option  ${
            answer && index === answer ? "answer" : ""
          } ${
            answer !== null &&
            (index === question.correctOption ? "correct " : "wrong")
          }`}
          key={option}
          onClick={(e) => {
            dispatch({ type: "newAnswer", payload: { index, title } });
            dispatch({ type: "user", payload: index });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
// function Options({ question, answer, setQuiz }) {
//   console.log({ answer });
//   return (
//     <div className="options">
//       {question.options.map((option, index) => (
//         <button
//           className={`btn btn-option  ${
//             !!answer && index === answer ? "answer" : ""
//           } ${
//             !!answer &&
//             (index === question.correctOption ? "correct " : "wrong")
//           }`}
//           key={option}
//           onClick={(e) =>
//             setQuiz((quiz) => {
//               return { ...quiz, answer: index };
//             })
//           }
//         >
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default Options;
