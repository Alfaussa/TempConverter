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

import Student from './routes/student.jsx';
import { loader as rootLoader, action as rootAction} from './routes/root.jsx'; 
import {loader as studentLoader} from './routes/student.jsx';
import EditStudent, {loader as editStudentLoader, action as editAction} from './routes/edit.jsx';
import { action as deleteAction } from './routes/delete';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root/>, 
    errorElement: <ErrorPage404/>,
    loader: rootLoader,
    action: rootAction,
  children: [
      {
    path: 'students/:studentId',
    element: <Student/>,
    loader: studentLoader,
      },
      {
		path: 'students/:studentId/edit',
		element: <EditStudent />,
		loader: editStudentLoader,
    action: editAction,
	},
  {
	path: 'students/:studentId/delete',
	action: deleteAction,
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