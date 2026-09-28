import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

function MusicPlayer({ enabled, startSignal }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!enabled || !audioRef.current) {
      return;
    }

    const audio = audioRef.current;

    audio.volume = 0.35;
  }, [enabled]);

  useEffect(() => {
    if (!startSignal || !audioRef.current) {
      return;
    }

    const audio = audioRef.current;

    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch((error) => {
        console.warn("Music could not start:", error);
        setPlaying(false);
      });
  }, [startSignal]);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.warn("Music could not start:", error);
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music/background.mp3`}
        loop
        preload="auto"
      />

      {enabled && (
        <button
          className="music-button"
          type="button"
          onClick={toggleMusic}
          aria-label={playing ? "సంగీతం ఆపివేయి" : "సంగీతం వినిపించు"}
        >
          {playing ? (
            <Volume2 size={17} />
          ) : (
            <VolumeX size={17} />
          )}
        </button>
      )}
    </>
  );
}

export default MusicPlayer;