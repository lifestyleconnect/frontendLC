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
					marginTop: "-10px",
					backgroundColor: "black",
					color: "white"
				}}>
				<div>
					<Image
						circular
						size="large"
						style={{ padding: "10px", height: "180px", width: "220px" }}
						src="https://i.pinimg.com/736x/5e/ef/b0/5eefb0ba496d7eb426493260fbd63fc0--girl-models-pretty-face.jpg"
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
					Welcome to SnapShop, {this.props.info.name}. To begin click on the figure below and select
					the phenotype that interests you.
				</div>
			</div>
		);
	}
}
