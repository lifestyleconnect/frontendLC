import React, { PureComponent } from "react";
import { Image, Reveal } from "semantic-ui-react";
import body from "../../people.svg";
import reveal from "../../reveal.svg";

export default class BodyComponent extends PureComponent {
	// <div id="nav_menu">
	//           <ul>
	//               <li id="l1">AAAAA</li>
	//               <li>BBBBB</li>
	//               <li>CCCCC</li>
	//               <li>DDDDD</li>
	//           </ul>
	//  </div>

	render() {
		return (
			<Reveal animated="fade" instant>
				<Reveal.Content visible>
					<Image src={body} size="medium" />
				</Reveal.Content>
				<Reveal.Content hidden>
					<Image src={reveal} size="medium" />
					{/* $('#nav_menu').slideDown(); */}
				</Reveal.Content>
			</Reveal>
		);
	}
}
