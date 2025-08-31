import Card from "./Card";

function GameBoard({ board , handleClickCard , flipped, matched } : { board: string[][], handleClickCard: (row: number, col: number) => void, flipped: { row: number; col: number }[], matched: { row: number; col: number }[] }) {


  return (
    <div className="p-5 bg-white rounded-md flex gap-4">
        {board.map((row, rowIndex) => (
            <div key={rowIndex} className=" flex flex-col gap-4">
                {row.map((card, cardIndex) => (
                    <Card key={cardIndex} card={card} flipped={flipped.some(c => c.row === rowIndex && c.col === cardIndex)} matched={matched.some(c => c.row === rowIndex && c.col === cardIndex)} handleClick={() => handleClickCard(rowIndex, cardIndex)}></Card>
                ))}
            </div>
        ))}
    </div>
  );
}

export default GameBoard;