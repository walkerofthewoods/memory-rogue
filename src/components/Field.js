import React, { useEffect, useState } from 'react';
import shuffle from '../shuffle';
import axios from 'axios';

const Field = () => {
	const superheroApiSize = 731;
	const deckSeed = [];
	for (let k = 1; k <= superheroApiSize; k++) {
		deckSeed.push(k);
	}
	shuffle(deckSeed);
	
	const [deck, setDeck] = useState([]);
	const order = useState(deckSeed);

	useEffect(() => {
		const fetchData = async () => {
			for (let i = 0; i < 4; i++) {
				try { 
					const response = await axios.get(`https://superheroapi.com/api/10114226739421973/${order[0][i]}/image`);
					setDeck(deck => [...deck, { name: response.data.name, url: response.data.url }]);
				} catch (err) {
					console.log(err);
				}
			}
		}

		fetchData();
	}, []);

	return deck.map((card) => <li key={card.name}>{card.name}</li>);
};

export default Field;

// each card has a click handler