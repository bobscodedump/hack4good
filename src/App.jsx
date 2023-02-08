import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import About from "./pages/About";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";

function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"));
  const [userId, updateUserId] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar isAuth={isAuth} setAuth={setAuth} updateUserId={updateUserId} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile userId={userId} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
