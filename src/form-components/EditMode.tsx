import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function updateEditMode() {
        setIsEditMode(!isEditMode);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="edit-mode-switch"
                checked={isEditMode}
                onChange={updateEditMode}
            />
            {!isEditMode ?
                <div>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            :   <div>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-checkbox"
                        label="Student?"
                        checked={isStudent}
                        onChange={(e) => {
                            setIsStudent(e.target.checked);
                        }}
                    />
                </div>
            }
        </div>
    );
}
