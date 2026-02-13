import React from "react";
import Question from "../question/Question";
import ResultScreen from "../resultScreen/ResultScreen";
import { QUESTIONS } from "../../data/quizQuestions";
import { useState } from "react";

const Quiz = ({ onRestart }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswerSelect = (selectedAnswer) => {
        const currentQuestion = QUESTIONS[currentQuestionIndex];

        const answerData = {
            questionText: currentQuestion.text,
            selectedAnswer: selectedAnswer.text,
            isCorrect: selectedAnswer.isCorrect,
        };

        setUserAnswers((prev) => [...prev, answerData]);

        if (selectedAnswer.isCorrect) {
            setScore((prev) => prev + 1);
        }

        const nextIndex = currentQuestionIndex + 1;

        if (nextIndex < QUESTIONS.length) {
            setCurrentQuestionIndex(nextIndex);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return (
            <ResultScreen
                score={score}
                totalQuestions={QUESTIONS.length}
                userAnswers={userAnswers}
                onRestart={onRestart}
            />
        );
    }
    return (
        <Question
            question={QUESTIONS[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            onAnswerSelect={handleAnswerSelect}
            />
    );
};

export default Quiz;