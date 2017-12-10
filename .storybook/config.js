import { configure } from "@storybook/react";
function loadStories() {
	require("../src/index.css");
	require("../src/components/profile/ProfileInfoComponent.story");
	require("../src/components/profile/BodyComponent.story");
}

configure(loadStories, module);
