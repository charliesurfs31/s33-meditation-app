import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ImagesPage from "./images.tsx";
import AudioPage from "./Audio.tsx";
import WelcomePage from "./Welcome.tsx";
import { AudioProvider } from "./AudioContext";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <AudioProvider>
        <div className="App">
          <Routes>
            <Route path="/images" element={<ImagesPage />} />
            <Route path="/audio" element={<AudioPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/" element={<Navigate to="/welcome" replace />} />
          </Routes>
        </div>
      </AudioProvider>
    </Router>
  );
};

export default App;
