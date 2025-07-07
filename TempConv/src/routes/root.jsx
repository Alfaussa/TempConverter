import { Outlet } from 
	'react-router-dom'; 
function Root() {
return (
	<div id="main">
		<nav>
			<a href={`/students/1`}>student1</a>
	 		<a href={`/sudents/2`}>student2</a>
		</nav>
		<div id="product">
			<Outlet />
		</div>
	</div>
)
}

export default Root;