import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AudioContext } from "./AudioContext";
import "./Audio.css";
import AudioController from "./AudioController";

const AudioPage: React.FC = () => {
  const { setAudioSrc } = useContext(AudioContext);

  const handleAudioClick = (audio: string) => {
    setAudioSrc(audio);
  };

  return (
    <div className="buttons">
      <nav className="navigation">
        <div className="nav-buttons">
          <Link to="/welcome" className="nav-button">
            Home
          </Link>
          <Link to="/audio" className="nav-button">
            Audio
          </Link>
          <Link to="/images" className="nav-button">
            Images
          </Link>
        </div>
      </nav>
      <h1 className="choose-audio">Choose Your Audio</h1>
      <div className="audio-buttons">
        <button
          onClick={() => handleAudioClick("/audio/meditation-bowls-23651.mp3")}
          className="audio-1"
        >
          Singing Bowl
        </button>
        <button
          onClick={() =>
            handleAudioClick(
              "/audio/calm-waves-crashing-against-a-beach-74813.mp3"
            )
          }
          className="audio-2"
        >
          Waves Crashing
        </button>
        <button
          onClick={() =>
            handleAudioClick("audio/forest-wind-and-birds-6881.mp3")
          }
          className="audio-3"
        >
          Forest Sounds
        </button>
      </div>
      <AudioController />
    </div>
  );
};

export default AudioPage;
