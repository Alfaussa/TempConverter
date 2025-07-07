


function Student() {

const student = {
		name: 'Ivan',
		surname: 'Ivanov',
		year: 2005,
		profession:'engineer'
	};

    return (
	<div>
		<h2>Student page</h2>
		<p>Name: {student.name}</p>
		<p>Surname: {student.surname}</p>
		<p>Year: {student.year}</p>
		<p>Profession: {student.profession}</p>
	</div>

)};
export default Student;