import "./App.scss";
import Welcome from "./components/Welcome";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="pInfo" element={<PersonalInfo />} />
      </Routes>
    </div>
  );
}

export default App;
