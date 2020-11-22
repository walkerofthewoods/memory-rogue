import React from 'react';

const Scoreboard = (props) => {
	return <h2>Memory Rogue Current Score: {props.score} High Score: {props.highScore}</h2>;
};

export default Scoreboard;
