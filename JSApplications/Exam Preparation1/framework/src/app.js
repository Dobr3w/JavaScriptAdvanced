import { page } from "./lib.js";
import { showExampleTemp } from "./views/exampleView.js";

page("/", showExampleTemp);
page.start();