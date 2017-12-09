import React, { PureComponent } from "react";
import { Header, Image } from "semantic-ui-react";

export default class ProfileInfoComponent extends PureComponent {
	state = {};

	render() {
		return (
			<div style={{ backgroundColor: "red" }}>
				<Header as="h2">
					<Image
						circular
						size="tiny"
						src="https://i.pinimg.com/564x/8e/d7/41/8ed7410285f101ba5892ff723c91fa75--life-is-beautiful-beautiful-eyes.jpg"
					/>
					{this.props.info.name}
				</Header>
			</div>
		);
	}
}
