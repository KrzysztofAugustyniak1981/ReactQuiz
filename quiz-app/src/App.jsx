import React from 'react';
import StartScreen from './components/startScreen/StartScreen';
import Question from './components/question/Question';
import ResultScreen from './components/resultScreen/ResultScreen';
import {QUESTIONS} from './data/quizQuestions';
import { useState } from 'react';
import './App.css';


function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleStart = () => {
    setQuizStarted(true);
  };

  const handleAnswerSelect = (answer) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    const isCorrect = answer.isCorrect;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        questionText: currentQuestion.text,
        selectedAnswer: answer.text,
        isCorrect: isCorrect,
      },
    ]);

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < QUESTIONS.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setQuizFinished(true);
    }
  };

  const handlerRestart = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
  };


  return (
    <div className="App">
      {!quizStarted && (
        <StartScreen onStart={handleStart} />
      )}
      {quizStarted && !quizFinished && (
        <Question
        question={QUESTIONS[currentQuestionIndex]}
        questionIndex={currentQuestionIndex}
        onAnswerSelect={handleAnswerSelect}
        />
      )}

      {quizFinished && (
        <ResultScreen
        score={score}
        totalQuestions={QUESTIONS.length}
        userAnswers={userAnswers}
        onRestart={handlerRestart}
        />
      )}
    </div>
  );
}

export default App
