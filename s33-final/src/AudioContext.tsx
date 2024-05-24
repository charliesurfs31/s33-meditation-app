import React, { createContext, useState, useEffect, useContext } from "react";

const AudioContext = createContext<any>(null);

const AudioProvider: React.FC = ({ children }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioSrc) {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      const newAudio = new Audio(audioSrc);
      newAudio.loop = true;
      newAudio.play();
      setAudio(newAudio);
      setIsPlaying(true);
      return () => {
        newAudio.pause();
        newAudio.currentTime = 0;
      };
    }
  }, [audioSrc]);

  const playAudio = () => {
    if (audio) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        audio,
        setAudioSrc,
        playAudio,
        pauseAudio,
        stopAudio,
        isPlaying,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export { AudioProvider, AudioContext };
