import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [quiz, setQuiz] = useState<boolean>(false);
    const [attempt, setAttempt] = useState<number>(4);
    function changeQuiz(): void {
        setQuiz(!quiz);
    }
    function changeAttemptsQuiz(): void {
        setAttempt(attempt - 1);
        setQuiz(!quiz);
    }

    function changeAttemptsMulligan(): void {
        setAttempt(attempt + 1);
    }
    return (
        <div>
            <Button
                onClick={changeAttemptsQuiz}
                disabled={quiz || attempt <= 0}
            >
                Start Quiz
            </Button>
            <Button onClick={changeQuiz} disabled={!quiz}>
                Stop Quiz
            </Button>
            <Button onClick={changeAttemptsMulligan} disabled={quiz}>
                Mulligan
            </Button>
            {<div>Attempts: {attempt}</div>}
        </div>
    );
}
