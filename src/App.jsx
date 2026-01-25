import { useEffect, useState } from "react";
import Question from "./components/Question";
import Answers from "./components/Answers";
import Result from "./components/Result";
import questionsData from "./data/questions.json";
import "./styles/App.css";

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(null);

  useEffect(() => {
    setQuestions(shuffle(questionsData));
  }, []);

  if (!questions.length) {
    return <p>Ładowanie...</p>;
  }

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
      setIsCorrect(true);
      setWrongAnswer(null);
    } else {
      setWrongAnswer(answer);
    }
  };

  const nextQuestion = () => {
    setIsCorrect(false);
    setWrongAnswer(null);

    setCurrentIndex((prev) => {
      if (prev + 1 < questions.length) {
        return prev + 1;
      }
      return 0; 
    });
  };

  return (
    <div className="app">
      <div className="counter">
        Pytanie {currentIndex + 1} / {questions.length}
      </div>

      <Question text={currentQuestion.question} />

      <Answers
        answers={currentQuestion.answers}
        onAnswerClick={handleAnswer}
        disabled={isCorrect}
        correctAnswer={currentQuestion.correctAnswer}
        wrongAnswer={wrongAnswer}
      />

      {isCorrect && <Result onNext={nextQuestion} />}
    </div>
  );
}

export default App;
