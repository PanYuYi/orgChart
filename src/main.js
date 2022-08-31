import { createApp } from "vue";
import App from "./App.vue";

import TOPOLOGY from "./components/Topology";

const app = createApp(App);
app.use(TOPOLOGY);

app.mount("#app");
