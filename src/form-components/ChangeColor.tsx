import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "maroon",
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    function chooseColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color: string) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        inline
                        name="colors"
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={chooseColor}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    display: "inline-block",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
