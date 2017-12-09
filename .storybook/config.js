import { configure } from "@storybook/react";
function loadStories() {
	require("../src/index.css");
}

configure(loadStories, module);
