import { redirect } from 'react-router-dom';
import {  deleteStudent } from '../forStorage';

export async function action({ params 
	}) { 
	await deleteStudent(params.studentId);
	return redirect('/');
}