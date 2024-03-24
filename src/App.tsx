import "./App.scss";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuotationPage } from "./pages/QuotationPage/QuotationPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={QuotationPage} path="/cotizacion" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
