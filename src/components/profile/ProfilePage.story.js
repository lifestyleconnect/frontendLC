import React from "react";
import ProfilePage from "./ProfilePage";
import { storiesOf } from "@storybook/react";

storiesOf("ProfilePage", module).add("Happy Path", () =>
	<ProfilePage user={{ name: "Benji", gender: "Male", age: 20 }} />
);
