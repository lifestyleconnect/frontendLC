import React, { Component } from "react";
import ProfilePage from "./components/profile/ProfilePage";
import PinCardComponent from "./components/profile/PinCardComponent";
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
							return (
								<ProfilePage
									user={{ name: "Julie", gender: "Female", age: 23, eyeColor: "green" }}
								/>
							);
						}}
					/>
					<Route
						exact
						path="/feed"
						render={() => {
							return (
								<ProfilePage
									user={{ name: "Julie", gender: "Female", age: 23, eyeColor: "green" }}
								/>
							);
						}}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
