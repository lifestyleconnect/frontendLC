import React, { PureComponent } from "react";
import { Image, Reveal, Message } from "semantic-ui-react";
import body from "../../people1.svg";
import reveal from "../../reveal1.svg";
import { Link } from "react-router-dom";

export default class BodyComponent extends PureComponent {
	state = {
		visible: false,
		eyeMessage: false
	};

	handleClick = () => {
		this.setState({ visible: !this.state.visible });
	};

	handleMouseHoverEye = e => {
		console.log(e.target);
		this.setState({ eyeMessage: true });
	};

	handleMouseLeave = e => {
		this.setState({ eyeMessage: false });
	};

	render() {
		return (
			<div
				style={{
					display: "flex",
					flexFlow: "column",
					width: "100%",
					height: "100%"
				}}>
				<div
					style={{
						display: "flex",
						flexFlow: "row",
						width: "100%",
						height: "100%"
					}}>
					<div
						style={{
							display: "flex",
							flexFlow: "row",
							width: "100%",
							height: "100%",
							marginTop: "15px",
							marginLeft: "30%"
						}}>
						<div style={{ display: "flex", flexFlow: "row" }}>
							{this.state.visible
								? <div
										style={{
											marginRight: "20px",
											visibility: "visible",
											display: "flex",
											flexFlow: "column"
										}}>
										<div style={{ marginTop: "100px" }}>
											<Image
												as={Link}
												to="/feed/hair-color"
												src="https://drive.google.com/uc?id=0Bz5OkCQSuFwYRElqX1UtajN6WG8"
												size="tiny"
											/>
										</div>
										<div
											style={{ marginTop: "70px" }}
											onMouseEnter={this.handleMouseHoverEye}
											onMouseLeave={this.handleMouseLeave}>
											<Image
												value="eyeColor"
												as={Link}
												to="/feed/eye-color"
												src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAASBAAAAJDU0YTM4ODAzLWNkYWYtNDMxZi05MjViLWRiMjg3ZDNlYjRmNg.jpg"
												size="tiny"
											/>
										</div>
										<div style={{ marginTop: "60px" }}>
											<Image
												circular
												as={Link}
												to="/feed/freckles"
												src="https://cdn2.iconfinder.com/data/icons/medical-plastic-surgery-and-dermatology/500/freckles-512.png"
												size="tiny"
											/>
										</div>
									</div>
								: <div
										style={{
											marginRight: "20px",
											visibility: "hidden",
											display: "flex",
											flexFlow: "column"
										}}>
										<div>
											<Image
												as={Link}
												to="/feed/hair-color"
												src="https://drive.google.com/uc?id=0Bz5OkCQSuFwYRElqX1UtajN6WG8"
												size="tiny"
											/>
										</div>
										<div>
											<Image
												as={Link}
												to="/feed/eye-color"
												src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAASBAAAAJDU0YTM4ODAzLWNkYWYtNDMxZi05MjViLWRiMjg3ZDNlYjRmNg.jpg"
												size="tiny"
											/>
										</div>
										<div>
											<Image
												as={Link}
												to="/feed/freckles"
												src="https://cdn2.iconfinder.com/data/icons/medical-plastic-surgery-and-dermatology/500/freckles-512.png"
												size="tiny"
											/>
										</div>
									</div>}
							<div>
								<Reveal animated="fade" instant onClick={this.handleClick} style={{ width: "70%" }}>
									<Reveal.Content visible>
										<Image src={body} size="medium" />
									</Reveal.Content>
									<Reveal.Content hidden>
										<Image src={reveal} size="medium" />
									</Reveal.Content>
								</Reveal>
							</div>
							{this.state.visible
								? <div
										style={{
											marginLeft: "-80px",
											visibility: "visible",
											display: "flex",
											flexFlow: "column"
										}}>
										<div style={{ marginTop: "100px" }}>
											<Image
												circular
												as={Link}
												to="/feed/skin-pigmentation"
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Color_icon_orange_v2.svg/2000px-Color_icon_orange_v2.svg.png"
												size="tiny"
											/>
										</div>
										<div style={{ marginTop: "40px" }}>
											<Image
												as={Link}
												to="/feed/handedness"
												src="https://drive.google.com/uc?id=0Bz5OkCQSuFwYbk5XbjFTNUdKWnM"
												size="tiny"
											/>
										</div>

										<div style={{ marginTop: "60px" }}>
											<Image
												as={Link}
												to="/feed/fitness"
												src="https://drive.google.com/uc?id=0Bz5OkCQSuFwYLVl0UWl3RjU0bEk"
												size="tiny"
											/>
										</div>
									</div>
								: <div style={{ marginLeft: "20px", visibility: "hidden" }}>
										<div>
											<Image
												as={Link}
												to="/feed/skin-pigmentation"
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Color_icon_orange_v2.svg/2000px-Color_icon_orange_v2.svg.png"
												size="tiny"
											/>
										</div>
										<div>
											<Image
												as={Link}
												to="/feed/handedness"
												src="https://drive.google.com/uc?id=0Bz5OkCQSuFwYbk5XbjFTNUdKWnM"
												size="tiny"
											/>
										</div>

										<div>
											<Image
												as={Link}
												to="/feed/fitness"
												src="https://drive.google.com/uc?id=0Bz5OkCQSuFwYLVl0UWl3RjU0bEk"
												size="tiny"
											/>
										</div>
									</div>}
						</div>
					</div>
				</div>
				{this.state.eyeMessage
					? <Message
							style={{ height: "100%", alignSelf: "center", left: "0", position: "relative" }}>
							<h4>Phenotype: Eye Color</h4>
							<p>
								According to your genetic data your eye color is {this.props.info.eyeColor}.
							</p>
						</Message>
					: null}
			</div>
		);
	}
}
