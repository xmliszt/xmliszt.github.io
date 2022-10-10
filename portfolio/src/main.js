import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRightToBracket,
  faArrowUpRightFromSquare,
  faAnglesDown,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

library.add(
  faArrowRightToBracket,
  faArrowUpRightFromSquare,
  faAnglesDown,
  faCircle,
  faExpand
);

createApp(App).mount("#app");
