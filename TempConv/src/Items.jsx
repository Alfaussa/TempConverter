import React from 'react'
import { memo } from 'react';

function Items({ items, addItem }) {

	const result = items.map((item, index) => {
		return <p key={index}>{item}</p>;
	});
    console.log('Items render');
	
	return (
		<div>
			<h3>Our items</h3>
			{result}
			<button onClick={addItem}>add item</button>
		</div>
	);

}

export default memo(Items)