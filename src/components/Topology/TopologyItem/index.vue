<script setup name="ListItemComponent">
const props = defineProps({
  itemData: {
    type: Object,
    default: () => {},
  },
});

const emits = defineEmits(["contextMenu"]);

const _ContextMenu = (e) => {
  e.preventDefault();
  emits("handleContextMenu", e, props.itemData);
};
const childHandleContextMenu = (e, data) => {
  e.preventDefault();
  emits("handleContextMenu", e, data);
};
</script>
<template>
  <div class="ListItemComponent">
    <div
      class="child-node"
      @contextmenu.stop="_ContextMenu"
      :class="{
        hasChild: itemData.children && itemData.children.length,
        hasParent: itemData.parentId,
      }"
    >
      <div>{{ itemData.name }}</div>
    </div>
    <template v-if="itemData.children && itemData.children.length">
      <div class="flex-box">
        <ListItemComponent
          @handleContextMenu="childHandleContextMenu"
          v-for="(item, index) in itemData.children"
          :key="index"
          :itemData="item"
        ></ListItemComponent>
      </div>
    </template>
  </div>
</template>
<style lang="scss">
.ListItemComponent {
  padding: 0 10px 0;
  flex-shrink: 0;
  .flex-box {
    display: flex;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 0 10px 0;
    justify-content: center;
    & > .ListItemComponent {
      position: relative;

      &:first-child {
        &::before {
          width: 0;
        }
      }
      &:last-child {
        &::after {
          width: 0;
        }
      }
      &::before {
        content: " ";
        position: absolute;
        z-index: 1;
        background-color: green;
        width: 50%;
        height: 2px;
        left: 0;
        top: 0;
      }
      &::after {
        content: " ";
        position: absolute;
        z-index: 1;
        background-color: green;
        width: 50%;
        height: 2px;
        left: 50%;
        top: 0;
      }
    }
  }
  .child-node {
    position: relative;
    flex-shrink: 0;
    width: 100px;
    height: 60px;
    background-color: #ccc;
    border: 1px solid green;
    margin: 20px auto 20px;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    &.hasChild {
      position: relative;
      &::after {
        position: absolute;
        content: " ";
        z-index: 1;
        width: 2px;
        background-color: green;
        height: 21px;
        left: 49px;
        bottom: -21px;
      }
    }
    &.hasParent {
      position: relative;
      &::before {
        position: absolute;
        content: " ";
        z-index: 1;
        width: 2px;
        background-color: green;
        height: 21px;
        left: 49px;
        top: -21px;
      }
    }
  }

  & + .listItemComponent {
    margin-left: 10px;
  }
}
</style>
