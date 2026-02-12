import React from "react";
import Button from "../Buttons/Button";
import styles from "./StartScreen.module.css";

const StartScreen = ({ onStart }) => {
    return (
        <div className={styles.screen}>
            <h1 className={styles.title}>Javascript Quiz</h1>
            <Button onClick={onStart} className={styles.startButton}>Rozpocznij quiz</Button>
        </div>
    );
};

export default StartScreen;

