import { storiesOf } from "@storybook/react";
import React from "react";
import NavbarComponent from "./NavbarComponent";
import StoryRouter from "storybook-router";

storiesOf("NavbarComponent", module)
	.addDecorator(StoryRouter())
	.add("Happy Path", () => <NavbarComponent />);
