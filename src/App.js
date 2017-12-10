import React, { Component } from "react";
import ProfilePage from "./components/profile/ProfilePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route
						exact
						path="/"
						render={() => {
							return <ProfilePage user={{ name: "Julie", gender: "Female", age: 23 }} />;
						}}
					/>
					<Route
						exact
						path="/feed"
						render={() => {
							return <ProfilePage user={{ name: "Julie", gender: "Female", age: 23 }} />;
						}}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
