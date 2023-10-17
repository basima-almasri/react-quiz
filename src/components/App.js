import { useEffect, useReducer } from "react";
import Headers from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScrren from "./StartScrren";
import Question from "./Question";
import { act } from "react-dom/test-utils";
import EndScreen from "./EndScreen";
export default function App() {
  const initinalState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    answers: [],
    points: 0,
    hightScore: 0,
  };
  function reducer(state, action) {
    const reducerObj = {
      dataRecived: {
        ...state,
        questions: action.payload,
        status: "ready",
        userAnswer: {},
      },
      dataFiled: { ...state, status: "error" },
      start: { ...state, status: "active" },
      user: {
        ...state,
        answer: action.payload,
        points:
          action.payload === state?.questions[state.index]?.correctOption
            ? state?.questions[state.index]?.points + state.points
            : state.points,
      },
      newAnswer: {
        ...state,

        answers: [...state.answers, action.payload],
      },
      newQuestion: { ...state, index: state.index + 1, answer: null },
      finish: {
        ...state,
        status: "quizFinish",
        hightScore:
          state.hightScore < state.points ? state.points : state.hightScore,
      },
      restart: {
        ...state,
        index: 0,
        answer: null,
        answers: [],
        points: 0,
        status: "ready",
      },
    };

    // const questionPoint = state?.questions[state.index]?.points;
    // const correct = state?.questions[state.index]?.correctOption;
    // console.log({ correct });
    return reducerObj[action.type];
  }
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initinalState
  );
  // console.log({ points });
  const numQuestions = questions?.length;
  const maxPointPossible = questions?.reduce((prev, curr) => {
    return prev + curr.points;
  }, 0);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => {
        dispatch({ type: "dataFialed" });
      });
  }, []);
  console.log({ points, maxPointPossible });

  return (
    <div>
      <Headers />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}

        {status === "ready" && (
          <StartScrren numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
            numQuestions={numQuestions}
            index={index}
            maxPointPossible={maxPointPossible}
            point={points}
          />
        )}
        {status === "quizFinish" && (
          <EndScreen
            points={points}
            maxPointPossible={maxPointPossible}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
