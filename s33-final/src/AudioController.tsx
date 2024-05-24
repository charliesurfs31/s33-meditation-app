import React, { useContext } from "react";
import { AudioContext } from "./AudioContext";
import "./AudioController.css";

const AudioController: React.FC = () => {
  const { playAudio, pauseAudio, stopAudio, isPlaying } =
    useContext(AudioContext);

  return (
    <div className="audio-controller">
      <button onClick={playAudio} disabled={isPlaying}>
        Play
      </button>
      <button onClick={pauseAudio} disabled={!isPlaying}>
        Pause
      </button>
      <button onClick={stopAudio}>Stop</button>
    </div>
  );
};

export default AudioController;
