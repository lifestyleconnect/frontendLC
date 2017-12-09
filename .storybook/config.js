import { configure } from "@storybook/react";
function loadStories() {
	require("../src/index.css");
	require("../src/components/profile/ProfileInfoComponent.story");
}

configure(loadStories, module);
