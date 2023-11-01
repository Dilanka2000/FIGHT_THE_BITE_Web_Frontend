import React from 'react'
import { SmallMonthContainer } from './calenderStyle';
import SmallDay from './SmallDay';

export default function SmallMonth({month}) {
    return (
        <SmallMonthContainer $row={month.length}>
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, id) => (
                        <SmallDay
                            day={day}
                            key={id}
                            rowIndex={i}
                            length={month.length}
                        />
                    ))}
                </React.Fragment>
            ))}
        </SmallMonthContainer>
    );
}