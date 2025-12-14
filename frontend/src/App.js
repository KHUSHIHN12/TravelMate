import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Login from "./pages/Login";
import About from "./pages/About";
import ProtectedRoute from "./components/ProtectedRoute";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/destinations"
          element={
            <ProtectedRoute>
              <Destinations />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
