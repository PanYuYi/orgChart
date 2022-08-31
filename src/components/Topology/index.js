import Topology from "./index.vue";

export { Topology };

const components = [Topology];
const TOPOLOGY = {
  install(App) {
    components.forEach((item) => {
      App.component(item.name, Topology);
    });
  },
};

export default TOPOLOGY;
