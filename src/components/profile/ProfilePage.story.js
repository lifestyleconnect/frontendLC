import React from "react";
import ProfilePage from "./ProfilePage";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-router";

storiesOf("ProfilePage", module)
	.addDecorator(StoryRouter())
	.add("Happy Path", () => <ProfilePage user={{ name: "Julie", gender: "Female", age: 23 }} />);
