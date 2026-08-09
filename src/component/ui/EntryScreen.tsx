import useEntryScreen from "../../hooks/EntryScreen";

const EntryScreen = () => {
    const showEntry = useEntryScreen();

    if (!showEntry) {
        return null;
    }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
        <h1 className="text-5xl font-bold text-white">
            Zorik
            <span className="text-blue-500">
                .
            </span>
        </h1>
    </div>
  );
};

export default EntryScreen;