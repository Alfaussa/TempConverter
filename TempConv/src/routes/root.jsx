
import { Outlet, Link, useLoaderData, Form } from 'react-router-dom'; 

import { getStudents, createStudents } from '../forStorage' 

export async function loader() {
	const students = await 
		getStudents(); 
	return { students };
}

export async function action() {
	const student = await createStudents();
	return { student };
}

function Root() {

	const { students } 
		= useLoaderData();
return (
	<div id="main">
		<div id="menu">
			<Form method="post">
				<button type="submit">add product</button>
			</Form>
		{students.length ? (
			<nav>
				{students.map((student)=>
				(
					<Link key ={student.id} to={`students/${student.id}`}>
						{student.name ? student.name : <i>Unnamed</i>}
						</Link>
				))}
			</nav>):(
				<p><i>no products here 
					...</i></p>
			)}
		
		<div id="student">
			<Outlet />
		</div>
		</div>
	</div>
)
}

export default Root;