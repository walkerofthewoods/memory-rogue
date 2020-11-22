import React, { useEffect } from 'react';
import shuffle from '../shuffle';
import axios from 'axios';

const deck = [];
const order = [];

const Field = () => {
	for (let k = 1; k <= 731; k++) {
		order.push(k);
	}

	shuffle(order);
	
	useEffect(() => {
		const fetchData = async () => {
			for (let i = 0; i < 4; i++) {
				await axios
					.get(`https://superheroapi.com/api/10114226739421973/${order[i]}/image`)
					.then((resp) => {
						deck.push({ name: resp.data.name, url: resp.data.url });
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}

		fetchData(deck, order);
	}, []);

	console.log(deck);

	return <h2>deck={}</h2>;
};

export default Field;

// each card has a click handler
/* 	

{deck.map((item, idx) => {
				return <li key={idx}>{item}</li>;
			})}

<div className="row">
		<div className="card">{deck[1].name}</div>
		<div className="card">{deck[2].name}</div>
		<div className="card">{deck[3].name}</div>
	</div>
	<div className="row">
		<div className="card">{deck[4].name}</div>
		<div className="card">{deck[5].name}</div>
		<div className="card">{deck[6].name}</div>
		<div className="card">{deck[7].name}</div>
	</div>
	<div className="row">
		<div className="card">{deck[8].name}</div>
		<div className="card">{deck[9].name}</div>
		<div className="card">{deck[10].name}</div>
		<div className="card">{deck[11].name}</div>
	</div> */
