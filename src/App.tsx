import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Store from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
    return (
        <ShoppingCartProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Store />} />
            </Routes>
        </ShoppingCartProvider>
    );
}

export default App;
