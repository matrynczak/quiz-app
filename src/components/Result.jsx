import "../styles/Result.css";

function Result({ onNext }) {
  return (
    <div className="result">
      <button onClick={onNext}>Następne pytanie</button>
    </div>
  );
}

export default Result;