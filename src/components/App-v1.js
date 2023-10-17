import { useEffect, useReducer, useState } from "react";
import Headers from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScrren from "./StartScrren";
import Question from "./Question";

export default function App() {
  const initinalState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
  };
  //   function reducer(state, action) {
  //     const reducerObj = {
  //       dataRecived: {
  //         ...state,
  //         questions: action.payload,
  //         status: "ready",
  //       },
  //       dataFiled: { ...state, status: "error" },
  //       start: { ...state, status: "active" },
  //       newAnswer: { ...state, answer: action.payload },
  //       newQuestion: { ...state, index: state.index + 1, answer: 0 },
  //     };
  //     return reducerObj[action.type];
  //   }
  //   const [{ questions, status, index, answer }, dispatch] = useReducer(
  //     reducer,
  //     initinalState
  //   );
  //   const numQuestions = questions.length;
  const [quiz, setQuiz] = useState(initinalState);
  const { questions, status, index, answer } = quiz;
  const numQuestions = questions.length;
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) =>
        setQuiz((quiz) => ({ ...quiz, questions: data, status: "ready" }))
      );
    //   .catch((err) => {
    //     dispatch({ type: "dataFialed" });
    //   });
  }, []);
  console.log({ quiz });
  return (
    <div>
      <Headers />
      <Main>
        {status === "loading" && <Loader />}
        {status === "ready" && (
          <StartScrren numQuestions={numQuestions} setQuiz={setQuiz} />
        )}
        {status === "active" && (
          <Question
            question={questions[index]}
            setQuiz={setQuiz}
            answer={answer}
            index={index}
          />
        )}
      </Main>
    </div>
  );
}
