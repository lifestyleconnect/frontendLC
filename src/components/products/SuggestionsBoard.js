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
					alignItems: "center",
					width: "100%"
				}}>
				<NavbarComponent />
				{this.props.pins
					? <div style={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
							{this.props.pins.map((pin, index) =>
								<PinCardComponent product={this.props.pins[index]} key={index} />
							)}
						</div>
					: null}
			</div>
		);
	}
}
