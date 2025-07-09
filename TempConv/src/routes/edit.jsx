import { Form, useLoaderData } from 'react-router-dom';
import { getStudent } from '../forStorage';
import { updateStudent } from '../forStorage';

export async function loader({ params 
	}) { 
	const student = await getStudent(params.studentId);

	return { student };
}

export async function action({ request, 
	params }) { 
	const formData = await request.formData();
	const updates = Object.fromEntries(formData);
	await updateStudent(params.studentId, updates);
	return { student };
}

function EditStudent() {
    const { student } = useLoaderData();
	return (
		<Form method="post" id="student-form">
			<div>
				<span>Name:</span>
				<input placeholder="name" type="text" 
					name="name" defaultValue={student.name}/> 
			</div>
			<div>
				<span>Surname:</span>
				<input placeholder="surname" type="text" 
					name="surname" defaultValue={student.surname} /> 
			</div>
			<div>
				<span>Year:</span>
				<input placeholder="year" type="text" 
					name="year" defaultValue={student.year}/> 
			</div>
            	<div>
				<span>Profession:</span>
				<input placeholder="profession" type="text" 
					name="profession" defaultValue={student.profession} /> 
			</div>
			<p>
				<button type="submit">save</button>
			</p>
		</Form>
	);
}

export default EditStudent;