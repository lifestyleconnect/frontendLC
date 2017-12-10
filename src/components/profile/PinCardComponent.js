import React, { PureComponent } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

export default class PinCardComponent extends PureComponent {
	state = {};

	render() {
		return (
			<Card>
				<Image src={this.props.product.imagesource} />
				<Card.Content>
					<Card.Header>{this.props.product.name}</Card.Header>
					<Card.Meta>
						<a href={this.props.product.link}>view on amazon.com</a>
					</Card.Meta>
					<Card.Description>{this.props.product.description}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<div
						style={{
							display: "flex",
							justifyContent: "center", //horizontal alignment
							alignItems: "center" //vertical alignment
						}}>
						<Button animated="vertical">
							<Button.Content hidden>Shop</Button.Content>
							<Button.Content visible>
								<Icon name="shop" />
							</Button.Content>
						</Button>

						<Button
							content="Like"
							icon="heart"
							label={{ as: "a", basic: true, content: "2,048" }}
							labelPosition="right"
						/>
						<Button icon="comments" />
					</div>
				</Card.Content>
			</Card>
		);
	}
}
