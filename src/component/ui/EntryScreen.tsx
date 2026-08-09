import useEntryScreen from "../../hooks/EntryScreen";


const EntryScreen = () => {
  const { showEntry, progress } = useEntryScreen();

  if (!showEntry) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
      <h1 className="text-5xl font-bold text-white">
        Zorik<span className="text-blue-500">.</span>
      </h1>

      <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-slate-700">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-400">
        Loading... {Math.round(progress)}%
      </p>
    </div>
  );
};

export default EntryScreen;