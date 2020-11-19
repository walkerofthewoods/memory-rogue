import React, { useState } from 'react';
import shuffle from '../shuffle';
import axios from 'axios';

const Field = () => {
	// when we create a field, pick 12 random from API to start game with, add them to the state

	// updateCards((cards) => [ ...cards, id ]);

	const deck = [];
	const order = [];

	for (i=1; i<=731; i++) {
		order.push(i);
	}

	shuffle(order);

	for (let i = 0; i < 12; i++) {
		const info = axios.get(`https://superheroapi.com/api/10114226739421973/${id}/image`);
		deck.push({name: info.name, url: info.url});
	}



	// each card has a click handler

	return (
		<div class="container">
			<header>This is the playing field header</header>
			<div class="row">
				<div id=Card1 class="card">deck[0].name</div>
				<div id=Card2 class="card">deck[1].name</div>
				<div id=Card3 class="card">deck[2].name</div>
        <div id=Card4 class="card">deck[3].name</div>
			</div>
			<div class="row">
				<div class="card">deck[4].name</div>
				<div class="card">deck[5].name</div>
				<div class="card">deck[6].name</div>
        <div class="card">deck[7].name</div>
			</div>
			<div class="row">
				<div class="card">deck[8].name</div>
				<div class="card">deck[9].name</div>
				<div class="card">deck[10].name</div>
        <div class="card">deck[11].name</div>
			</div>
			<footer>This is the footer</footer>
		</div>
	);
};

export default Field;
