import "./App.scss";
import Welcome from "./components/Welcome";
import { Routes, Route, Navigate } from "react-router-dom";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Resume from "./components/resume/Resume";
//localStorage.clear();

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="pInfo" element={<PersonalInfo />} />
        <Route path="work" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
