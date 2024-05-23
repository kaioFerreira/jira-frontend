import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
