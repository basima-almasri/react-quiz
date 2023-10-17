function Progress({
  point,
  maxPointPossible,

  index,
  numQuestions,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        question <strong>{point}</strong>/{maxPointPossible}
      </p>
    </header>
  );
}

export default Progress;
