import React, { PureComponent } from "react";
import NavbarComponent from "../nav/NavbarComponent";
import PinCardComponent from "./PinCardComponent";
import getPins from "../../requests/getPins";

export default class SuggestionsBoard extends PureComponent {
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
				<PinCardComponent product={this.props.pins[0]} />
			</div>
		);
	}
}
