import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { RootState } from "./app/store";
import ImagesPage from "./images.tsx";
import AudioPage from "./Audio.tsx";
import WelcomePage from "./Welcome.tsx";
import LoginPage from "./authentication/Login.tsx";
import SignupPage from "./authentication/Signup.tsx";
import { AudioProvider } from "./AudioContext";
import store from "./app/store";
import "./App.css";

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  return user ? element : <Navigate to="/login" replace />;
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AudioProvider>
          <div className="App">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/welcome"
                element={<PrivateRoute element={<WelcomePage />} />}
              />
              <Route
                path="/audio"
                element={<PrivateRoute element={<AudioPage />} />}
              />
              <Route
                path="/images"
                element={<PrivateRoute element={<ImagesPage />} />}
              />
              <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
        </AudioProvider>
      </Router>
    </Provider>
  );
};

export default App;
