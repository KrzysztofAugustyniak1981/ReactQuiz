import React from "react";
import Button from "../buttons/Button";
import styles from "./startScreen.module.css";

const StartScreen = ({ onStart }) => {
    return (
        <div className={styles.screen}>
            <h1 className={styles.title}>Javascript Quiz</h1>
            <Button onClick={onStart} className={styles.startButton}>Rozpocznij quiz</Button>
        </div>
    );
};

export default StartScreen;

