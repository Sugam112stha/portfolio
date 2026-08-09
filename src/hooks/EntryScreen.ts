import { useEffect, useState } from "react";

const useEntryScreen = (duration: number = 2000) => {
  const [showEntry, setShowEntry] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 20;
    const step = 100 / (duration / interval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return prev + step;
      });
    }, interval);

    const entryTimer = setTimeout(() => {
      setShowEntry(false);
    }, duration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(entryTimer);
    };
  }, [duration]);

  return { showEntry, progress };
};

export default useEntryScreen;