import React from "react";
import {memo} from "react";


const Child = memo( function Child({ 
	name }) { 
	console.log('child render');
	return <h3>Hello {name}!</h3>;
});

export default Child