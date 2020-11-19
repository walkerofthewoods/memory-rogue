import React from 'react';

const Scoreboard = (props) => {
	return (
		<header>
			Memory Rogue Current Score:${props.score} Best Score ${props.bestScore}{' '}
		</header>
	);
};

export default Scoreboard;
