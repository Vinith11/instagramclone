import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";


// Define global styles for the application
const styles = {
  global: (props) => ({
    body: {
      // Set the background and text color based on the current theme mode
      // mode function is a utility from the Chakra UI library
      // mode(lightModeValue, darkModeValue)(props)
      bg: mode("gray.100", "#000")(props),
      color: mode("gray.800", "whiteAplha.900")(props),
    },
  }),
};

// Configuration object for the application
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// creating a new theme object by extending the default theme with (config) & (styles).
const theme = extendTheme({ config, styles });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
