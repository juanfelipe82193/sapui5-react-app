import React from 'react';
import { MyApp } from "./MyApp";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";

function App() {
  return (
    <HashRouter>
      <ThemeProvider withToastContainer>
        <MyApp />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
