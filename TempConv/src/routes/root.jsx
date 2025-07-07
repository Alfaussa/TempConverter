
import { Outlet, Link, useLoaderData } from 'react-router-dom'; 

import { getStudents } from '../forStorage' 

export async function loader() {
	const students = await 
		getStudents(); 
	return { students };
}



function Root() {

	const { students } 
		= useLoaderData();
return (
	<div id="main">
		<div id="menu">
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