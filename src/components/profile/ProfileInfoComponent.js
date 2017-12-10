import React, { PureComponent } from "react";
import { Header, Image, Segment } from "semantic-ui-react";

export default class ProfileInfoComponent extends PureComponent {
	state = {};

	render() {
		return (
			<div
				style={{
					display: "flex",
					borderBottom: "solid black 10px",
					borderTop: "solid black 10px",
					width: "100%",
					marginTop: "-10px"
				}}>
				<div>
					<Image
						circular
						size="large"
						style={{ padding: "10px", height: "180px", width: "220px" }}
						src="https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.ngsversion.1422285553360.adapt.1900.1.jpg"
					/>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							fontWeight: "bold",
							paddingBottom: "5px"
						}}>
						{this.props.info.name}
					</div>
				</div>
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}>
					{this.props.info.name} is a {this.props.info.age} year old {this.props.info.gender}.
				</div>
			</div>
		);
	}
}
