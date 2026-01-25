import "../styles/Result.css";

function Result({ onNext }) {
  return (
    <div className="result">
      <p>🎉 Gratulacje! Dobra odpowiedź.</p>
      <button onClick={onNext}>Następne pytanie</button>
    </div>
  );
}

export default Result;