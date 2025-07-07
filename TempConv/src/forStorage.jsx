import localforage from 'localforage'; 

export async function 
	getStudents() { 
	await someNetwork();
	let students = await 
		localforage.getItem('students'); 
	if (!students) students = [];
	return students;
};


let someCache = {};

async function someNetwork(key) {
	if (!key) {
		someCache = {};
	}

	if (someCache[key]) {
		return;
	}

	someCache[key] = true;

	return new Promise((res) => {
		setTimeout(res, Math.random() 
			* 700); 
	});
}