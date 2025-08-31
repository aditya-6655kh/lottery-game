import { useState } from "react";
import { genRandNums, isEven } from "./helper";

export default function GameStarted() {
  const [gameWon, setGameWon] = useState(false);
  const [ticket, setTicket] = useState([]);
  const [amount, setAmount] = useState(1000);

  const genRandomTicket = () => {
    const numbers = genRandNums(3);
    setTicket(numbers);

    if (isEven(numbers)) {
      setGameWon(true);
      setAmount((prev) => prev + 100);
    } else {
      setGameWon(false);
      setAmount((prev) => prev - 400);
    }
  };

  return (
    <div className="text-center">
      <h2 className="mb-4 text-xl">Wallet: ₹{amount}</h2>

      {amount > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">🎰 Lottery Started!</h2>

          <div className="flex justify-center space-x-4 mt-4 text-3xl font-mono">
            <div>{ticket[0]}</div>
            <div>{ticket[1]}</div>
            <div>{ticket[2]}</div>
          </div>

          {ticket.length > 0 && (
            <p className="mt-4 text-lg">
              {gameWon
                ? "🎉 You won! Wallet doubled."
                : "❌ You lost! Wallet empty."}
            </p>
          )}

          <button
            onClick={genRandomTicket}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            Generate Ticket
          </button>
        </div>
      ) : (
        <div>
          <div className="flex justify-center space-x-4 mt-4 text-3xl font-mono">
            <div>{ticket[0]}</div>
            <div>{ticket[1]}</div>
            <div>{ticket[2]}</div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            🎰 Lottery Over! You lost all your money 💸
          </h2>
          <p className="mb-4">Thank you for playing!</p>
        </div>
      )}
    </div>
  );
}
