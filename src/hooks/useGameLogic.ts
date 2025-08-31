import { useEffect, useState } from "react";
import useTimer from "./useTimer";


export default function useGameLogic() {
    const { time, startTimer, stopTimer, resetTimer } = useTimer();
    const allImages = [
        '🐶', '🐭', '🐹', '🦊', '🐻', '🐼', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐴', '🐝', '🦋', '🐢', '🐙'
    ];

    const images: { [key: string]: string[] } = {
        animals: ['🐶', '🐭', '🐹', '🦊', '🐻', '🐼', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐴', '🐝', '🦋', '🐢', '🐙'],
        fruits: ['🍎', '🍌', '🍊', '🍇', '🍓', '🥝', '🍑', '🥭', '🍍', '🥥', '🍅', '🥑', '🌶️', '🥕', '🌽', '🥒', '🥬', '🥦'],
        sports: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🥅', '🏒', '🏑', '🥍', '🏏', '⛳', '🎯', '🥊'],
        faces: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗']
    };
    const [theme, setTheme] = useState("animals");

    const [board, setBoard] = useState<string[][]>([]);
    const [moves, setMoves] = useState(0);
    const [flipped, setFlipped] = useState<{ row: number; col: number }[]>([]);
    const [matched, setMatched] = useState<{ row: number; col: number }[]>([]);
    const size: { [key: string]: { rows: number; cols: number } } = {
        easy: { rows: 4, cols: 4 },
        medium: { rows: 4, cols: 5 },
        hard: { rows: 6, cols: 6 },
    };
    const [difficulty, setDifficulty] = useState("easy");
    const [gameEnded, setGameEnded] = useState(false);

    useEffect(() => {
        initializeBoard();
    }, []);

    useEffect(() => {
        if (!gameEnded) return;
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '{}');

        // Parse time as seconds for comparison
        const timeToSeconds = (t: string) => {
            const [min, sec] = t.split(':').map(Number);
            return min * 60 + sec;
        };

        const prev = leaderboard[difficulty];
        const newTime = timeToSeconds(time);
        const newMoves = moves;

        let shouldUpdate = false;
        if (!prev) {
            shouldUpdate = true;
        } else {
            const prevTime = timeToSeconds(prev.time);
            if (newTime < prevTime) shouldUpdate = true;
            else if (newTime === prevTime && newMoves < prev.moves) shouldUpdate = true;
        }

        if (shouldUpdate) {
            leaderboard[difficulty] = { time, moves };
            localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        }

    }, [gameEnded]);

    useEffect(() => {
        handleNewGame();
    }, [difficulty, theme]);

    useEffect(() => {
        if (matched.length === size[difficulty].rows * size[difficulty].cols) {
            stopTimer();
            setGameEnded(true);
        }
    }, [matched, stopTimer]);


    const initializeBoard = () => {
        const { rows, cols } = size[difficulty];
        const image = images[theme].slice(0, Math.floor((rows * cols) / 2));
        const shuffledImages = [...image, ...image].sort(() => Math.random() - 0.5);
        const newBoard = Array.from({ length: rows }, (_, rowIndex) =>
            shuffledImages.slice(rowIndex * cols, rowIndex * cols + cols)
        );
        setBoard(newBoard);
    }

    const handleNewGame = () => {
        initializeBoard();
        setGameEnded(false);
        setFlipped([]);
        setMatched([]);
        setMoves(0);
        resetTimer();
    }

    const handleClickCard = (row: number, col: number) => {
        if (flipped.length === 0) {
            startTimer();
            setFlipped(() => [{ row, col }]);
            return;
        }

        if (flipped[0].row === row && flipped[0].col === col) return;

        if (flipped.length === 1) {
            setFlipped((prev) => [...prev, { row, col }]);
            setMoves((prev) => prev + 1);

            if (board[row][col] === board[flipped[0].row][flipped[0].col]) {
                setTimeout(() => {
                    setMatched((prev) => [...prev, { row, col }, flipped[0]]);
                }, 400);
            }
            setTimeout(() => {
                setFlipped([]);
            }, 800);
        }
    }

    return {
        time,
        board,
        handleNewGame,
        flipped,
        moves,
        matched,
        handleClickCard,
        setDifficulty,
        difficulty,
        gameEnded,
        size,
        theme,
        setTheme
    };
};