
function DifficultLevel({ difficulty, handleNewGame, setDifficulty }: { difficulty: string, handleNewGame: () => void, setDifficulty: (level: string) => void }) {


    const handleDifficultyChange = (level: string) => {
        setDifficulty(level);
        handleNewGame();
    }

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
        <h3>Difficult Level</h3>
        <div className="flex">
            <button className={`border p-2 rounded-md ${difficulty === "easy" ? "bg-blue-500 text-white" : ""}`} onClick={() => handleDifficultyChange("easy")}>
                <p className="font-bold">Easy</p>
                <p className="">4x4</p>
            </button>
            <button className={`border p-2 rounded-md ${difficulty === "medium" ? "bg-blue-500 text-white" : ""}`} onClick={() => handleDifficultyChange("medium")}>
                <p className="font-bold">Medium</p>
                <p className="">4x5</p>
            </button>
            <button className={`border p-2 rounded-md ${difficulty === "hard" ? "bg-blue-500 text-white" : ""}`} onClick={() => handleDifficultyChange("hard")}>
                <p className="font-bold">Hard</p>
                <p className="">6x6</p>
            </button>
        </div>
    </div>
  );
}

export default DifficultLevel;