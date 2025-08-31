
function Popup({moves, time, handleNewGame}: {moves: number, time: string, handleNewGame: () => void}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex flex-col items-center shadow-lg gap-4 bg-white p-8 rounded-lg">
            <h2 className="text-[1.5rem] font-bold">Congratulations!</h2>
            <p>You finished the game in <span className="font-bold">{moves}</span> moves.</p>
            <p>Time: <span className="ml-1 font-medium">{time}</span></p>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:scale-105 active:scale-90" onClick={() => {handleNewGame()}}>Play Again</button>
        </div>
    </div>
  );
}

export default Popup;