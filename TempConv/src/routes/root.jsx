import { Outlet } from 
	'react-router-dom'; 
function Root() {
return (
	<div id="main">
		<nav>
			<a href={`/products/1`}>Product1</a>
	 		<a href={`/products/2`}>Product2</a>
		</nav>
		<div id="product">
			<Outlet />
		</div>
	</div>
)
}

export default Root;