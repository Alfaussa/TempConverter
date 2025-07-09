import { Form } from 'react-router-dom';

function EditStudent() {
	return (
		<Form method="post" id="student-form">
			<div>
				<span>Name:</span>
				<input placeholder="name" type="text" 
					name="name" /> 
			</div>
			<div>
				<span>Surname:</span>
				<input placeholder="surname" type="text" 
					name="surname" /> 
			</div>
			<div>
				<span>Year:</span>
				<input placeholder="year" type="text" 
					name="year" /> 
			</div>
            	<div>
				<span>Profession:</span>
				<input placeholder="profession" type="text" 
					name="profession" /> 
			</div>
			<p>
				<button type="submit">save</button>
			</p>
		</Form>
	);
}

export default EditStudent;