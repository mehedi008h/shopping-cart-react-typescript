import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
            </Routes>
        </div>
    );
}

export default App;
