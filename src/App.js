import NavBar from "./components/NavBar";
import GlobalStyle from "./GlobalStyles";
import Hero from "./components/Hero";
import Sizes from "./components/Sizes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />

      <Routes>
        <Route exact path='/' element={<Hero />}></Route>
        <Route exact path='/Sizes' element={<Sizes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
