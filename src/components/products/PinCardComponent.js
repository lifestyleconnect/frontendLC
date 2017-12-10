import React, { PureComponent } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

export default class PinCardComponent extends PureComponent {
	state = {
		starred: false
		//eventually change this to the feed from the backend
	};

	toggleStar = () => {
		this.setState({ starred: !this.state.starred });
	};

	render() {
		var c;
		if (this.state.starred) {
			c = "pink";
		} else c = "";
		var starcount = 2048;
		if (this.state.starred) {
			starcount = 2049;
		}
		return (
			<Card color={c}>
				<Image src={this.props.product.img_url} />
				<Card.Content>
					<Card.Header>{this.props.product.title}</Card.Header>
					<Card.Meta>
						Tagged as:
						<a href="#">#green eyes</a>
						<a href="#">#dark hair</a>
						{/* Add parsing for tags property here */}
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
						<Button href={this.props.product.link} animated="vertical">
							<Button.Content hidden>Shop</Button.Content>
							<Button.Content visible>
								<Icon name="shop" />
							</Button.Content>
						</Button>

						<Button
							onClick={this.toggleStar}
							label={{ as: "a", basic: true, content: starcount.toString() }}
							labelPosition="right"
							icon="star"
							color={c}
						/>

						<Button
							icon="comments"
							label={{ as: "a", basic: true, content: "572" }}
							labelPosition="right"
						/>
					</div>
				</Card.Content>
			</Card>
		);
	}
}
