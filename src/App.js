import React, { Component } from "react";
import ProfilePage from "./components/profile/ProfilePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import getPins from "./requests/getPins";
import SuggestionsBoard from "./components/products/SuggestionsBoard";

class App extends Component {
	state = {};
	componentWillMount = async () => {
		let pins = await getPins();
		this.setState({ pins });
	};
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
								<SuggestionsBoard
									pins={this.state.pins}
									user={{ name: "Julie", gender: "Female", age: 23, eyeColor: "green" }}
								/>
							);
						}}
					/>
					<Route
						exact
						path="/feed/eye-color"
						render={() => {
							return (
								<SuggestionsBoard
									pins={this.state.pins}
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
