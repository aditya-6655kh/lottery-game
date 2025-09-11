import { useState } from "react";
import GameStarted from "./GameStarted.jsx";
import Rules from "./Rules.jsx";
export default function LotteryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen ">
      {!gameStarted ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            🎉 Welcome to Lottery Game 🎉
          </h1>
          <p className="mb-6">Try your luck and win big!</p>
          <Rules />
          <button
            onClick={() => setGameStarted(true)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Play
          </button>
        </div>
      ) : (
        // <GameStarted />
        <div className="text-center">
          <GameStarted />
          <button
            onClick={() => setGameStarted(false)}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}
