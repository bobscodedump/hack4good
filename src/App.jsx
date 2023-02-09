import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//pages
import About from "./pages/About";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import NewPage from "./pages/NewPage";


function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <div className="App bg-red-100 h-screen">
      <BrowserRouter>
        <NavBar isAuth={isAuth} setAuth={setAuth} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newpage" element={<NewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
