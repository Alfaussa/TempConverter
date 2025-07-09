import { getStudent } from '../forStorage';
import { useLoaderData } from 'react-router-dom';
import { Form } from 'react-router-dom';
export async function loader({ params 
	}) { 
	const student = await getStudent(params.studentId);
	return { student };
}

function Student() {

const { student } = useLoaderData();


    return (
	<div>
		<h2>Student page</h2>
		<p>Name: {student.name ? student.name : <i>unnamed</i>}</p>
		<p>Surname: {student.surname ? student.surname : <i>unnamed</i>} </p>
		<p>Year: {student.year ? student.year : <i>unknown</i>}</p>
		<p>Profession: {student.profession ? student.profession : <i>unknown</i>}</p>
		<Form action="edit">
	<button type="submit">edit</button>
</Form>
	</div>

)};
export default Student;