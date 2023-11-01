import React, { useState } from 'react'
import GlogalContext from './GlobalContext'
import dayjs from 'dayjs'

export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    return (
        <GlogalContext.Provider value={{ monthIndex, setMonthIndex }}>
            {props.children}
        </GlogalContext.Provider>
    );
}
