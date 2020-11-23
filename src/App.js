import React, { useState } from 'react';
import Scoreboard from "./components/Scoreboard";
import Field from "./components/Field";
import './index.css';

function App() {
	const [ score, setScore ] = useState(0);
	const [ highScore, setHighScore ] = useState(0);

	const boardSize = 12;

  if (score > highScore) {
    setHighScore(score);
  }

	if (score == boardSize) {
		alert('You win!');
	}

	return (
		<div>
			<Scoreboard score={score} highScore={highScore}/>
			<div className="wrapper">
			<Field score={score} setScore={setScore}/>
			</div>
		</div>
	);
}

export default App;
