import React from "react";
import Button from "../buttons/Button";
import styles from "./ResultScreen.module.css";

const ResultScreen = ({ score, totalQuestions, userAnswers, onRestart }) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 80;

    return (
        <div className={styles.container}>

            <h1 className={passed ? styles.success : styles.fail}>
                {passed ? "Gratulacje quiz zaliczony" : "Niestety quiz niezaliczony"}
            </h1>

            <p className={styles.result}>
                Twój wynik to: <span class name={styles.precent}>
                    {percentage}%</span>{" "}
                ({score} z {totalQuestions} poprawnych odpowiedzi)
            </p>


            <div className={styles.answersList}>
                {userAnswers.map((answer, index) => (
                    <div key={index} className={styles.answerBlock}>
                        <p className={styles.question}>
                            Pytanie {index + 1}: {answer.questionText}
                        </p>

                        <p>
                            Twoja odpowiedź:{" "}
                            <span
                                className={
                                    answer.isCorrect
                                        ? styles.correctAnswer
                                        : styles.incorrectAnswer
                                }
                            >
                                {answer.selectedAnswer}
                            </span>
                        </p>
                    </div>
                ))}
            </div>

            <Button onClick={onRestart} className={styles.restartGood}>
                Powrót do startu
            </Button>
        </div>
    );
};

export default ResultScreen;