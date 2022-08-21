import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRightToBracket,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRightToBracket, faArrowUpRightFromSquare);

createApp(App).mount("#app");
