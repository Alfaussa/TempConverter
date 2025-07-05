import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from  'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom';


const router = createBrowserRouter([
	{
		path: '/',
		element: <div>I'm number one in React!</div>, 
	},
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//     path = ''
//     element = "I'm number one in React!"
// // 	},'
//     />
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <App/>
		<RouterProvider 
			router={router} /> 
	</React.StrictMode>
);