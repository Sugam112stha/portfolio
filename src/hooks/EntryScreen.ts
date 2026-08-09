import { useEffect, useState } from "react";

const useEntryScreen = (duration: number = 1000) => {
  const [showEntry, setShowEntry] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEntry(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return showEntry;
};

export default useEntryScreen;