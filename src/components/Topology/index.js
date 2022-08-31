import topology from "./index.vue";

export { topology };

const components = [topology];
const Topology = {
  install(App) {
    components.forEach((item) => {
      App.component(item.name, topology);
    });
  },
};

export default Topology;
