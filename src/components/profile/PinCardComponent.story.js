import React from "react";
import PinCardComponent from "./PinCardComponent";
import { storiesOf } from "@storybook/react";

storiesOf("PinCardComponent", module).add("Happy Path", () => (
	<PinCardComponent
		product={{
			imagesource:
				"https://boots.scene7.com/is/image/Boots/10223100?id=-Klmv1&fmt=jpg&fit=constrain,1&wid=504&hei=548",
			name: "This Brand Makeup",
			link:
				"https://www.amazon.com/LandFox-Cosmetic-Eyeshadow-Palette-Fishtail/dp/B01MPWVKBI/ref=sr_1_7_a_it?ie=UTF8&qid=1512932711&sr=8-7&keywords=makeup&th=1some",
			description: "this is makeup"
		}}
	/>
));
