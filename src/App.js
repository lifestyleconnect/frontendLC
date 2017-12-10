import React, { Component } from "react";
import ProfilePage from "./components/profile/ProfilePage";

class App extends Component {
	render() {
		return (
			<div className="App">
				<ProfilePage user={{ name: "Benji", gender: "Male", age: 20 }} />
			</div>
		);
	}
}

export default App;
