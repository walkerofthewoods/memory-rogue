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

	return (
		<div>
			<Scoreboard score={score} highScore={highScore}/>
			<Field score={score} setScore={setScore}/>
		</div>
	);
}

export default App;
