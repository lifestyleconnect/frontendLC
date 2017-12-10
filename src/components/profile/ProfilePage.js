import React, { PureComponent } from "react";
import NavbarComponent from "../nav/NavbarComponent";
import ProfileInfoComponent from "./ProfileInfoComponent";
import BodyComponent from "./BodyComponent";

export default class ProfilePage extends PureComponent {
	render() {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center"
				}}>
				<NavbarComponent />
				<ProfileInfoComponent info={this.props.user} />
				<BodyComponent info={this.props.user} />
			</div>
		);
	}
}
