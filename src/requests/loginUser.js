export default function login({ username, password }) {
	return fetch(`http://10.2.1.128:8000/token/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ username, password })
	})
		.then(response => response.json())
		.catch(error => console.log(error));
}
