import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { LoginRoom } from "./pages/LoginRoom";
import { User } from "./pages/User";
import { Games } from "./pages/Games";
import { Room } from "./pages/Room";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<About />}></Route>
          <Route path="/login" element={<LoginRoom />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/games/stray" element={<Room />}></Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
