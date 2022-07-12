import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { Alert } from "./components/Alert";

const App = () => (
  <>
    <Navbar />

    <div className="container p-4">
      <Alert />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:urlName" element={<Profile />} />
        <Route path="/:route" element={<Navigate to="/" />} />
      </Routes>
    </div>
  </>
);

export default App;
