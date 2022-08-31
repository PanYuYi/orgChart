import topology from "./index.vue";

const components = [topology];
const Topology = {
  install(App) {
    components.forEach((item) => {
      App.component(item.name, topology);
    });
  },
};

export default Topology;
