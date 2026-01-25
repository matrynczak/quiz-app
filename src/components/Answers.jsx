import "../styles/Answers.css";

function Answers({
  answers,
  onAnswerClick,
  disabled,
  correctAnswer,
  wrongAnswer
}) {
  return (
    <div className="answers">
      {answers.map((answer) => {
        let className = "answer-btn";

        if (answer === wrongAnswer) {
          className += " wrong";
        }

        if (disabled && answer === correctAnswer) {
          className += " correct";
        }

        return (
          <button
            key={answer}
            onClick={() => onAnswerClick(answer)}
            disabled={disabled}
            className={className}
          >
            {answer}
          </button>
        );
      })}
    </div>
  );
}

export default Answers;
