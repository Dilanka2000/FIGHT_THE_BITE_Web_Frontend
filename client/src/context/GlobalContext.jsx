import React from "react";

const GlogalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => { },
});

export default GlogalContext;