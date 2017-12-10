import React, { PureComponent } from "react";
import { Dropdown, Image, Menu, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class NavbarComponent extends PureComponent {
	state = { activeItem: "discover" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		return (
			<Menu secondary style={{ width: "100%" }}>
				<Menu.Item as={Link} to="/">
					<Image src="/LOGOFINAL.png" alt="" size="mini" />SnapShop
				</Menu.Item>
				<Menu.Item
					as={Link}
					to="/"
					name="home"
					active={activeItem === "home"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="messages"
					active={activeItem === "messages"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="discover"
					as={Link}
					to="/feed"
					active={activeItem === "discover"}
					onClick={this.handleItemClick}
				/>
				<Menu.Menu position="right">
					<Menu.Item>
						<Input icon="search" placeholder="Search..." />
					</Menu.Item>
					<Menu.Item
						name="logout"
						active={activeItem === "logout"}
						onClick={this.handleItemClick}
					/>
				</Menu.Menu>
			</Menu>
		);
	}
}
