import { useContext } from 'react';
import { MyContext } from './MyContext';

function SmallBox() {
	const name = useContext(MyContext);
	

	return (
		<p>I am {name} </p>
	);
}
export default SmallBox