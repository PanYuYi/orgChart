import { createApp } from "vue";
import App from "./App.vue";

import Topology from "./components/Topology";

const app = createApp(App);
app.use(Topology);

app.mount("#app");
