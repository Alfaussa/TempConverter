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
import Root from './routes/root.jsx';
import ErrorPage404 from './error-page-404'; 
import Product from './routes/product.jsx';
import Student from './routes/student.jsx';
import { loader as rootLoader } from './routes/root.jsx'; 


const router = createBrowserRouter([
	{
		path: '/',
		element: <Root/>, 
    errorElement: <ErrorPage404/>,
    loader: rootLoader,
  children: [
      {
    path: 'students/:studentId',
    element: <Student/>
      },
  ]
}
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
  
		<RouterProvider 
			router={router} /> 
	</React.StrictMode>
);