import React from "react";
import { MonthContainer } from "./calenderStyle";
import Day from "./Day";

export default function Month({ month, events, setLoading, setUpdateSuccess }) {
    return (
        <MonthContainer $row={month.length}>
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, id) => (
                        <Day
                            day={day}
                            key={id}
                            rowIndex={i}
                            length={month.length}
                            events={events}
                            setLoading={setLoading}
                            setUpdateSuccess={setUpdateSuccess}
                        />
                    ))}
                </React.Fragment>
            ))}
        </MonthContainer>
    );
}
