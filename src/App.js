import { Routes, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import { Alert } from "./components/Alert/Alert";
import { AlertState } from "./contex/alert/AlertState";

function App() {
  return (
    <AlertState>
      <Layout>
        <Navbar />
        <Alert alert={{ text: "Test alert" }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:name" element={<Profile />} />
        </Routes>
      </Layout>
    </AlertState>
  );
}

export default App;
