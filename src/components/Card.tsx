
function Card({ card, handleClick , flipped , matched } : { card: string, handleClick: () => void, flipped: boolean, matched: boolean }) {
  return (
    <div
      className="perspective"
      onClick={handleClick}
      style={{ width: '6rem', height: '6rem' }}
    >
      <div
        className={`flip-card-inner ${flipped || matched ? 'flipped' : ''} ${matched ? 'matched' : ''}`}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Card Back */}
        <div className="flip-card-back flex items-center justify-center w-full h-full rounded-md bg-red-400 absolute top-0 left-0">
        </div>

        {/* Card Front */}
        <div className={`flip-card-front flex items-center justify-center w-full h-full rounded-md text-2xl absolute top-0 left-0 ${matched ? 'bg-green-600' : 'bg-blue-400'}`}>
          {card}
        </div>
      </div>
    </div>
  );
}

export default Card;