import React from "react";
import Button from "../Button/Button";
import styles from "./Question.module.css";

const Question = ({ 
    question,
    questionIndex,
    onAnswerSelect,
}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.question}>
                Pytanie {questionIndex + 1}: {question.text}
            </h3>
            <div className={styles.answers}>
                {question.answers.map((answer, index) => (
                    <Button
                        key={index}
                        onClick={() => onAnswerSelect(answer)}
                        className={styles.answerButton}
                    >
                        {answer.text}
                    </Button>
                ))}
            </div>


        </div>
    );
};
export default Question;

