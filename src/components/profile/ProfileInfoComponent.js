import React, { PureComponent } from "react";
import { Header, Image } from "semantic-ui-react";

export default class ProfileInfoComponent extends PureComponent {
	state = {};

	render() {
		return (
			<div>
				<Header as="h2">
					<Image
						circular
						src="https://lh3.googleusercontent.com/dB3Dvgf3VIglusoGJAfpNUAANhTXW8K9mvIsiIPkhJUAbAKGKJcEMPTf0mkSexzLM5o=w300"
					/>
					{this.props.info.name}
				</Header>
			</div>
		);
	}
}
