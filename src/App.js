import React, { useState } from 'react';
import './App.css';
import Scoreboard from "./components/Scoreboard";
import Field from "./components/Field";

function App() {
	const [ score, setScore ] = useState(0);
	const [ highScore, setHighScore ] = useState(0);

  if (score > highScore) {
    setHighScore(score);
  }

	//score={score} highScore={highScore}
	return (
		<div>
			<Scoreboard />
			<Field />
		</div>
	);
}

export default App;
