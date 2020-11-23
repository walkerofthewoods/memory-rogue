import React, { useState } from 'react';
import Scoreboard from "./components/Scoreboard";
import Field from "./components/Field";
import './index.css';

function App() {
	const [ score, setScore ] = useState(0);
	const [ highScore, setHighScore ] = useState(0);

  if (score > highScore) {
    setHighScore(score);
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
