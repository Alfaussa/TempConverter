


function Student() {

const product = {
		name: 'Ivan',
		surname: 'Ivanov',
		year: 2005,
		profession:'engineer'
	};

    return (
	<div>
		<h2>Student page</h2>
		<p>Name: {product.name}</p>
		<p>Surname: {product.surname}</p>
		<p>Year: {product.year}</p>
		<p>Profession: {product.profession}</p>
	</div>

)};
export default Student;