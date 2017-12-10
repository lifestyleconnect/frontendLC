import React, { PureComponent } from "react";
import { Dropdown, Image, Menu, Input } from "semantic-ui-react";

export default class NavbarComponent extends PureComponent {
	state = { activeItem: "home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		return (
			<Menu secondary style={{ width: "100%" }}>
				<Menu.Item>
					<Image src="/LOGOFINAL.png" alt="" size="mini" />
				</Menu.Item>
				<Menu.Item name="home" active={activeItem === "home"} onClick={this.handleItemClick} />
				<Menu.Item
					name="messages"
					active={activeItem === "messages"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="discover"
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
