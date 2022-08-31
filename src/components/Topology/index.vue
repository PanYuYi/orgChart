<script setup name="topology-page">
import { ref, onMounted } from "vue";
import _ from "lodash";

import { recursionArr } from "../../utils/index";

import TopologyItem from "./TopologyItem/index.vue";
import Dialog from "../Dialog/index.vue";

const _dataArr = [
  {
    name: "张三",
    id: "010101",
    code: "",
    parentId: null,
  },
  {
    name: "李四",
    id: "233324",
    code: "",
    parentId: "010101",
  },
  {
    name: "李屋",
    id: "32233",
    code: "",
    parentId: "010101",
  },
  {
    name: "王五",
    id: "2334",
    code: "",
    parentId: "32233",
  },
  {
    name: "王刘",
    id: "434343343",
    code: "",
    parentId: "2334",
  },
  {
    name: "李白",
    id: "12343333",
    code: "",
    parentId: "32233",
  },
  {
    name: "张飞",
    id: "23244455",
    code: "",
    parentId: "12343333",
  },
  {
    name: "刘备",
    id: "3456543",
    code: "",
    parentId: "23244455",
  },
  {
    name: "关羽",
    id: "344455555",
    code: "",
    parentId: "23244455",
  },
  {
    name: "关羽2",
    id: "3444555552",
    code: "",
    parentId: "23244455",
  },
  {
    name: "第三者",
    id: "001",
    code: "",
    parentId: "010101",
  },
  {
    name: "第三者",
    id: "0011",
    code: "",
    parentId: "001",
  },
  {
    name: "第三者",
    id: "0012",
    code: "",
    parentId: "0011",
  },
  {
    name: "第三者",
    id: "0013",
    code: "",
    parentId: "0012",
  },
  {
    name: "第三者",
    id: "0014",
    code: "",
    parentId: "0012",
  },
  {
    name: "第三者",
    id: "00141",
    code: "",
    parentId: "0014",
  },
  {
    name: "第三者",
    id: "001411",
    code: "",
    parentId: "00141",
  },
  {
    name: "第三者",
    id: "001412",
    code: "",
    parentId: "00141",
  },
  {
    name: "名称",
    id: "002",
    code: "",
    parentId: "3456543",
  },
  {
    name: "名称",
    id: "003",
    code: "",
    parentId: "002",
  },
  {
    name: "名称",
    id: "004",
    code: "",
    parentId: "003",
  },
  {
    name: "名称",
    id: "006",
    code: "",
    parentId: "003",
  },
  {
    name: "名称",
    id: "005",
    code: "",
    parentId: "004",
  },
  {
    name: "名称",
    id: "007",
    code: "",
    parentId: "005",
  },
];

const topologyRef = ref();
const showDialog = ref(false);

const dataList = ref([]);

let menuRef = null;

const currentObj = ref({});

const openMenuDialog = (e) => {
  e.preventDefault();
  const btnBox = document.getElementById("btnBox");
  menuRef.style.display = "block";
  btnBox.style.left = e.x + "px";
  btnBox.style.top = e.y + "px";
};

const clickBtnMask = (e) => {
  menuRef.style.display = "none";
};

const handleContextMenu = (e, data) => {
  console.log("父级节点接收 > ", e, data);
  currentObj.value = data;
  openMenuDialog(e);
};

const addSuperNode = (e) => {
  if (currentObj) {
    if (!currentObj.value.id) {
      alert("请填写信息");
      return;
    }
    const newObj = {
      name: "未定义",
      id: "12345677",
      parentId: "",
      children: [],
    };
    currentObj.value.parentId = newObj.id;
    const _list = _.cloneDeep(dataList.value);
    dataList.value = [];
    newObj.children = _list;
    dataList.value = [newObj];
    console.log("dataList > ", dataList.value);
  }
};
const addChildNode = (e) => {
  if (currentObj) {
    if (!currentObj.value.id) {
      alert("请填写信息");
      return;
    }
    if (!currentObj.value.children) currentObj.children = [];
    currentObj.value.children.push({
      id: "",
      code: "",
      name: "未定义",
      parentId: currentObj.value.id,
    });
  }
};

const init = () => {
  dataList.value = recursionArr(_dataArr);
  menuRef = document.getElementById("menuPage");
};

// 初始化
onMounted(() => {
  init();
});
</script>
<script>
export default {
  name: "Topology",
};
</script>
<template>
  <div ref="topologyRef" class="topology-page">
    <div
      id="areaId"
      class="area-box"
      @contextmenu="
        (e) => {
          e.preventDefault();
        }
      "
    >
      <TopologyItem
        v-for="(item, index) in dataList"
        :key="index"
        :itemData="item"
        @handleContextMenu="handleContextMenu"
      >
      </TopologyItem>
    </div>
    <div class="menu-box" id="menuPage" @click.self="clickBtnMask">
      <div class="btn-box" id="btnBox">
        <div class="btn" v-if="!currentObj.parentId" @click="addSuperNode">
          添加上一级
        </div>
        <div class="btn" @click="addChildNode">添加下一级</div>
      </div>
    </div>

    <Dialog :show="showDialog" title="温馨提示">
      <div>请输入内容</div>
    </Dialog>
  </div>
</template>
<style lang="scss">
.topology-page {
  .area-box {
    border: 1px solid #aaa;
    min-height: 500px;
    min-width: 500px;
    overflow: scroll;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
  }
  .menu-box {
    display: none;
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba($color: #000000, $alpha: 0);

    .btn-box {
      position: absolute;
      width: 80px;
      left: 50%;
      top: 50%;
      background-color: #fff;
      box-shadow: 0 0 10px 0px #eee;
      border-radius: 4px;
    }
    .btn {
      padding: 10px;
      cursor: pointer;
      color: #1450ff;
    }
  }
}
</style>
