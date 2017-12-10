import React, { PureComponent } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import getComments from "../../requests/getComments";

export default class PinCardComponent extends PureComponent {
	state = {
		starred: false
		//eventually change this to the feed from the backend
	};

	toggleStar = () => {
		this.setState({ starred: !this.state.starred });
	};

	state = {};
	componentWillMount = async () => {
		let pinsComments = await getComments(this.props.product.id);
		this.setState({ pinsComments });
	};

	render() {
		var c;
		if (this.state.starred) {
			c = "pink";
		} else c = "";
		var starcount = this.props.product.stars;
		if (this.state.starred) {
			starcount = this.props.product.stars + 1;
		}
		return (
			<div>
				{this.state.pinsComments
					? <Card color={c}>
							{this.props.product.experience_url
								? <div
										style={{
											display: "flex",
											height: "300px",
											justifyContent: "center",
											alignItems: "center",
											overflow: "hidden"
										}}>
										<Image size="small" src={this.props.product.image_url} />
										<Image size="small" src={this.props.product.experience_url} />
									</div>
								: <div
										style={{
											display: "flex",
											height: "300px",
											justifyContent: "center",
											alignItems: "center",
											overflow: "hidden"
										}}>
										<Image size="small" src={this.props.product.image_url} />
									</div>}
							<Card.Content>
								<Card.Header>
									{this.props.product.title}
								</Card.Header>
								<Card.Meta>
									Tagged as:
									<a href="#">#green eyes</a>
									{/* Add parsing for tags property here */}
								</Card.Meta>
								<Card.Description>
									{this.props.product.description}
								</Card.Description>
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
										label={{ as: "a", basic: true, content: this.state.pinsComments.length }}
										labelPosition="right"
									/>
								</div>
							</Card.Content>
						</Card>
					: null}
				{this.state.commentToggle ? <div /> : null}
			</div>
		);
	}
}
