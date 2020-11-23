import React, { useEffect, useState } from 'react';
import shuffle from '../shuffle';
import axios from 'axios';
import '../index.css';

const Field = (props) => {
	const superheroApiSize = 731;
	const deckSeed = [];
	for (let k = 1; k <= superheroApiSize; k++) {
		deckSeed.push(k);
	}
	shuffle(deckSeed);

	const [ deck, setDeck ] = useState([]);
	const order = useState(deckSeed);

	useEffect(() => {
		const fetchData = async () => {
			for (let i = 0; i < 8; i++) {
				try {
					const response = await axios.get(
						`https://superheroapi.com/api/10114226739421973/${order[0][i]}/image`
					);
					setDeck((deck) => [
						...deck,
						{ name: response.data.name, url: response.data.url, clicked: false }
					]);
				} catch (err) {
					console.log(err);
				}
			}
		};

		fetchData();
	}, []);

	function clicked(cardname) {
		console.log(cardname);

		let index = deck.findIndex((element) => element.name === cardname);

		if (index >= 0) {
			if (deck[index].clicked === true) {
				alert('you lose');
			}
		}

		let temp = [ ...deck ];
		temp[index].clicked = true;

		setDeck(temp);
		props.setScore(props.score + 1);
	}

	return deck.map((card) => (
		<figure key={card.name} onClick={() => clicked(card.name)}>
			<img className="card" src={card.url} alt={card.name} />
			<figcaption>{card.name}</figcaption>
		</figure>
	));
};

export default Field;

// each card needs a click handler  //onClick=
// each card displays image
