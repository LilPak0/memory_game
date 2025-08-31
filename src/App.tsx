import React, { useEffect } from 'react';
import InfoGame from './components/InfoGame';
import GameBoard from './components/GameBoard';
import useGameLogic from './hooks/useGameLogic';
import Popup from './components/Popup';
import useTimer from './hooks/useTimer';
import DifficultLevel from './components/DifficultLevel';
import Theme from './components/Theme';
import Leaderboard from './components/Leaderboard';


function App() {
  const { time, board, handleNewGame, moves, matched, flipped, handleClickCard, setDifficulty, difficulty, gameEnded, size, theme, setTheme } = useGameLogic();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-500 ">
      <h1 className='text-4xl font-bold text-center text-white mb-10'>Memory Game</h1>
      <div className='flex gap-5'>
        <div className='flex flex-col gap-5'>
          <DifficultLevel difficulty={difficulty} handleNewGame={handleNewGame} setDifficulty={setDifficulty}></DifficultLevel>
          <Theme theme={theme} setTheme={setTheme} handleNewGame={handleNewGame}></Theme>
          <Leaderboard></Leaderboard>
        </div>
        <div className='flex flex-col gap-5'>
          <InfoGame time={time} matched={matched} size={size[difficulty]} difficulty={difficulty} moves={moves} handleNewGame={handleNewGame}></InfoGame>
          <GameBoard board={board} flipped={flipped} matched={matched} handleClickCard={handleClickCard}></GameBoard>
          {gameEnded && (<Popup moves={moves} time={time} handleNewGame={handleNewGame}></Popup>)}
        </div>
      </div>
    </div>
  );
}

export default App;
