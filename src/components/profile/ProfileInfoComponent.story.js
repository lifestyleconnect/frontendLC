import React from "react";
import ProfileInfoComponent from "./ProfileInfoComponent";
import { storiesOf } from "@storybook/react";

storiesOf("ProfileInfoComponent", module).add("Happy Path", () =>
	<ProfileInfoComponent info={{ name: "Benji", gender: "Male", age: 20 }} />
);
