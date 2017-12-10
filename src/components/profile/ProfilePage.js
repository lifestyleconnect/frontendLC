import React, { PureComponent } from "react";
import NavbarComponent from "../nav/NavbarComponent";
import ProfileInfoComponent from "./ProfileInfoComponent";

export default class ProfilePage extends PureComponent {
	render() {
		return (
			<div>
				<NavbarComponent />
				<ProfileInfoComponent info={this.props.user} />
			</div>
		);
	}
}
