import React from "react";
import { MonthContainer } from "./calenderStyle";
import Day from "./Day";

export default function Month({ month }) {
    return (
        <MonthContainer $row={month.length}>
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, id) => (
                        <Day day={day} key={id} rowIndex={i} length={month.length} />
                    ))}
                </React.Fragment>
            ))}
        </MonthContainer>
    );
}
