
import { Outlet, Link } from 'react-router-dom'; 
function Root() {
return (
	<div id="main">
		<nav>
			<Link to={`/students/1`}>student1</Link>
	 		<Link to={`/sudents/2`}>student2</Link>
		</nav>
		<div id="product">
			<Outlet />
		</div>
	</div>
)
}

export default Root;