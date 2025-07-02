import Board from './board';
import { useState } from 'react';

export default function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const isXnext = currentMove % 2 === 0;

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = "Go to move #" + move;
        }
        else {
            description = "Go to game start";
        }
        return (
            <li>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    function jumpTo(nextMove) {
        if (nextMove === 0) {
            resetBoard();
            return;
        }
        setCurrentMove(nextMove);
    }

    function resetBoard() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board isXnext={isXnext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <div>Game History:</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}