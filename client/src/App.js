import React, { useState } from "react";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./assets/styles/theme";
import { GlobalStyle } from "./assets/styles/globalStyls";
import { Helmet } from "react-helmet";

export const ThemeContext = React.createContext(null);

export default function App() {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>Sidebar - HeHee</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                </Helmet>


                <Routes />
                
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
