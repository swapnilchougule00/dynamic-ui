import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/DashBoard" element={<DashBoard/>} />
    </Routes>
    </div>
  );
}

export default App;
