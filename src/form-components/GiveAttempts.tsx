import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [rAttempts, rSetAttempts] = useState<string>("0");
    function decreaseAttempts() {
        setAttempts(attempts - 1);
    }
    function increaseAttempts() {
        const requestedAttempts = parseInt(rAttempts) || 0;
        setAttempts(attempts + requestedAttempts);
        rSetAttempts("0");
    }

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        rSetAttempts(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts Remaining = {attempts}
            <div>
                <Button onClick={decreaseAttempts} disabled={attempts <= 0}>
                    Use
                </Button>
            </div>
            <Form.Group controlId="formAttempt">
                <Form.Label>:</Form.Label>
                <Form.Control
                    type="number"
                    value={rAttempts}
                    onChange={updateAttempts}
                />
            </Form.Group>
            <Button onClick={increaseAttempts}> Gain </Button>
        </div>
    );
}
