import React, { PureComponent } from "react";
import { Image, Reveal } from "semantic-ui-react";
import body from "../../people.svg";
import reveal from "../../reveal.svg";

export default class BodyComponent extends PureComponent {
	state = {
		visible: false
	};

	handleClick = () => {
		this.setState({ visible: !this.state.visible });
	};
	render() {
		return (
			<div
				style={{
					display: "flex",
					flexFlow: "row",
					width: "100%",
					height: "100%",
					justifyContent: "center",
					marginTop: "15px"
				}}>
				<div style={{ display: "flex", flexFlow: "row" }}>
					{this.state.visible
						? <div style={{ visibility: "visible" }}>content</div>
						: <div style={{ visibility: "hidden" }}>content</div>}
					<div>
						<Reveal animated="fade" instant onClick={this.handleClick}>
							<Reveal.Content visible>
								<Image src={body} size="medium" />
							</Reveal.Content>
							<Reveal.Content hidden>
								<Image src={reveal} size="medium" />
							</Reveal.Content>
						</Reveal>
					</div>
					{this.state.visible
						? <div style={{ visibility: "visible" }}>content</div>
						: <div style={{ visibility: "hidden" }}>content</div>}
				</div>
			</div>
		);
	}
}
