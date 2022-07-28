import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppContainer from "./components/layout/AppContainer";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: "#B41730",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContainer />}>
            <Route path="home" element={<Home />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
