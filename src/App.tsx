import "./App.scss";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuotationPage } from "./pages/QuotationPage/QuotationPage";
import { UserProvider } from "./context/UserContext";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <UserProvider>
          <Routes>
            <Route Component={Home} path="/" />
            <Route Component={QuotationPage} path="/cotizacion" />
          </Routes>
        </UserProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
