# 🎰 Lottery Game

A simple **React + Tailwind CSS** lottery game where you start with ₹1000.  
Generate random tickets → if the ticket is even, your money increases by 100 💰, if not, your money decreases by 400 💸.  

---

## ✨ Features
- 🎮 Interactive lottery gameplay  
- 💰 Wallet system (start with ₹1000)  
- ✅ Win: money increases by 100  
- ❌ Lose: money decreases by 400  
- 🎨 Styled with Tailwind CSS  
- ⚡ Built with React + Vite  

---

## 🛠️ Tech Stack
- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/aditya-6655kh/lottery-game.git
cd lottery-game
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the dev server
```bash
npm run dev
```

Open [Lottery-game](https://aditya-6655kh.github.io/lottery-game/) in your browser 🎉  

---

## 📂 Project Structure
```
lottery-game/
├── public/              # Static files
├── src/
│   ├── assets/          # Images & styles
│   ├── App.jsx          # Main app entry
│   ├── LotteryGame.jsx  # Welcome screen
│   ├── GameStarted.jsx  # Core lottery logic
│   ├── Rules.jsx        # Game rules
│   ├── helper.js        # Utility functions
│   └── index.css        # Tailwind imports
├── vite.config.js       # Vite config
├── package.json
└── README.md
```

---

## 🎯 How to Play
1. Start with a wallet of **₹1000**  
2. Click **Generate Ticket** 🎟️  
3. If the ticket sum is **even → you win → wallet doubles**  
4. If the ticket sum is **odd → you lose → wallet becomes ₹0**  
5. Game ends when wallet is empty  

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).  
