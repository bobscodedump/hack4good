import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import About from "./pages/About";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";

function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"));
<<<<<<< HEAD
=======
  const [userId, updateUserId] = useState("");
>>>>>>> 36a2b69d95d9f42eb1d76ed073f8abbfb4800680

  return (
    <div className="App bg-red-100 h-screen">
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
