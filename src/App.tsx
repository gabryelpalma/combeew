import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { LoginRoom } from "./pages/LoginRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sobre" element={<About />}></Route>
        <Route path="/login" element={<LoginRoom />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
