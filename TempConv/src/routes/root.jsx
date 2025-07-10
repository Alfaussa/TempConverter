
import { Outlet, useLoaderData, Form } from 'react-router-dom'; 

import { getStudents, createStudents } from '../forStorage' 
import {redirect, NavLink} from 'react-router-dom';
import {useNavigation} from 'react-router-dom';

export async function loader() {
	const students = await 
		getStudents(); 
	return { students };
}

export async function action() {
	const student = await createStudents();
	return redirect(`/students/${student.id}/edit`);
}

function Root() {

	const { students } 
		= useLoaderData();


const navigation = useNavigation();

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
					<NavLink key ={student.id} to={`students/${student.id}`}
					className={({ isActive, isPending }) =>
		  isActive ? 'active' : isPending ? 'loading' : ''

				}>
						{student.name ? student.name : <i>Unnamed</i>}
						</NavLink>
				))}
			</nav>):(
				<p><i>no products here 
					...</i></p>
			)}
		
		<div id="student" className={navigation.state === 'loading' 
	? 'loading' : ''}>
			<Outlet />
		</div>
		</div>
	</div>
)
}

export default Root;