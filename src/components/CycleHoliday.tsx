import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday =
    | "new years"
    | "christmas"
    | "easter"
    | "thanksgiving"
    | "independence";

// Maps the Old state -> New State
const o_Holiday: Record<Holiday, Holiday> = {
    "new years": "easter",
    christmas: "new years",
    easter: "independence",
    thanksgiving: "christmas",
    independence: "thanksgiving",
};
const a_Holiday: Record<Holiday, Holiday> = {
    christmas: "easter",
    easter: "independence",
    independence: "new years",
    "new years": "thanksgiving",
    thanksgiving: "christmas",
};

export function CycleHoliday(): React.JSX.Element {
    function emoji(holiday: Holiday): string {
        if (holiday === "new years") {
            return "🎉";
        }
        if (holiday === "christmas") {
            return "🎄";
        }
        if (holiday === "easter") {
            return "🐇";
        }
        if (holiday === "thanksgiving") {
            return "🍗";
        }
        return "🦅";
    }
    const [holiday, setHoliday] = useState<Holiday>("independence");
    function changeHolidayA(): void {
        setHoliday(a_Holiday[holiday]);
    }
    function changeHolidayO(): void {
        setHoliday(o_Holiday[holiday]);
    }

    return (
        <div>
            <Button onClick={changeHolidayA}>Advance By Alphabet</Button>
            <Button onClick={changeHolidayO}>Advance By Year</Button>
            <span>Holiday: {emoji(holiday)} </span>
        </div>
    );
}
