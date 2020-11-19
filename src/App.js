import './App.css';

function App() {
	const [ bestScore, score ] = useState(0);

  if (score > bestScore) {
    bestScore = useState(score);
  }

	return (
		<div>
			<Scoreboard score={score} bestScore={bestScore} />
			<Field score={score} />
		</div>
	);
}

export default App;
