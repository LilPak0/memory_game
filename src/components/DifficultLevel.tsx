
function DifficultLevel({ difficulty, handleNewGame, setDifficulty }: { difficulty: string, handleNewGame: () => void, setDifficulty: (level: string) => void }) {


    const handleDifficultyChange = (level: string) => {
        setDifficulty(level);
        handleNewGame();
    }

  return (
    <div className="bg-white p-4 rounded-md shadow-lg">
        <h3 className="text-[1.15rem] font-semibold">📶 Difficulty Level</h3>
        <div className="mt-2 flex justify-center gap-2">
            <button className={`flex-1 border p-2 rounded-md ${difficulty === "easy" ? "bg-blue-500 text-white" : "hover:border-blue-500 hover:bg-gray-100"}`} onClick={() => handleDifficultyChange("easy")}>
                <p className="font-bold">Easy</p>
                <p className="">4x4</p>
            </button>
            <button className={`flex-1 border p-2 rounded-md ${difficulty === "medium" ? "bg-blue-500 text-white" : "hover:border-blue-500 hover:bg-gray-100"}`} onClick={() => handleDifficultyChange("medium")}>
                <p className="font-bold">Medium</p>
                <p className="">4x5</p>
            </button>
            <button className={`flex-1 border p-2 rounded-md ${difficulty === "hard" ? "bg-blue-500 text-white" : "hover:border-blue-500 hover:bg-gray-100"}`} onClick={() => handleDifficultyChange("hard")}>
                <p className="font-bold">Hard</p>
                <p className="">6x6</p>
            </button>
        </div>
    </div>
  );
}

export default DifficultLevel;