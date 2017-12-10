export default function getPins() {
	return fetch(`http://10.2.1.128:8000/pins/4`, {
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(response => response.json())
		.catch(error => console.log(error));
}
