import "./App.scss";
import Welcome from "./components/Welcome";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="pInfo" element={<PersonalInfo />} />
        <Route path="work" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
