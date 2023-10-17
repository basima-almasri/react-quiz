import { useReducer } from "react";
function reducer(state, action) {
  console.log(state);
  const reduceObj = {
    dec: { ...state, count: state.count - state.step },
    inc: { ...state, count: state.count + state.step },

    definCount: { ...state, count: action.payload },
    definStep: { ...state, step: action.payload },
    reset: { count: 0, step: 1 },
  };
  console.log({ reducer: [action.type] });
  return reduceObj[action.type];
}
function DateCounter() {
  // const [count, setCount] = useState(0);
  const ininal = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, ininal);
  const { count, step } = state;
  // const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  // date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "definCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "definStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
