export default function getPins(id) {
	return fetch(`http://10.2.1.128:8000/pins/${id}/comments`, {
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(response => response.json())
		.catch(error => console.log(error));
}
