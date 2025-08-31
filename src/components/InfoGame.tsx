
function InfoGame({ matched, time, size, difficulty, moves, handleNewGame }: { matched: { row: number; col: number }[]; time: string; size: { rows: number; cols: number }; difficulty: string; moves: number; handleNewGame: () => void }) {

  return (
    <div className="p-3 w-[100%] bg-white rounded-md flex justify-center items-center gap-8 shadow-lg">
      <span>🎯 {moves} moves</span>
      <span>🕛 {time}</span>
      <span>🧩 {matched.length / 2}/{(size.rows * size.cols) / 2} pairs</span>
      <button className="p-2 text-white bg-blue-500 rounded-md hover:scale-105 active:scale-90" onClick={() => {handleNewGame()}}>New Game</button>
    </div>
  );
}

export default InfoGame;