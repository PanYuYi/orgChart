import _ from "lodash";

/**
 * 把一个扁平化数组根据parentId组装成新的树状数组
 * @param {Array} arr 扁平化数组
 * @returns 一个新的数组
 */
export const recursionArr = (arr) => {
  if (!arr) return [];
  const sourceArr = _.cloneDeep(arr);
  // 第一步寻找最顶级节点
  const _index = sourceArr.findIndex((v) => !v.parentId);
  if (_index === -1) return [];

  const newArr = [];

  const FATHER_NODE = sourceArr.splice(_index, 1)[0];
  console.log("先找到顶级父节点 > ", FATHER_NODE);
  FATHER_NODE.children = [];
  newArr.push(FATHER_NODE);
  const _f = function (list, obj) {
    for (let i = 0; i < list.length; i++) {
      const listItem = list[i];
      if (!obj.children) obj.children = [];
      if (listItem.parentId === obj.id) {
        obj.children.push(listItem);
      }
    }
    if (obj.children.length) {
      for (let j = 0; j < obj.children.length; j++) {
        const childItem = obj.children[j];
        _f(list, childItem);
      }
    }
  };
  _f(sourceArr, FATHER_NODE);

  return newArr;
};
/**
 * 获取一个数组的深度最大值
 * @param {Array} arr 对象数组
 */
export const getArrayYMax = (arr) => {
  const countArr = [];
  const _f = (o, n) => {
    let _n = ++n;
    if (o && o.children && o.children.length) {
      o.children.forEach((v) => {
        _f(v, _n);
      });
    } else {
      countArr.push(_n);
      return;
    }
  };
  if (Array.isArray(arr)) {
    arr.forEach((v) => {
      _f(v, 0);
    });
    console.log("countArr > ", countArr);
    const _max = _.max(countArr);
    console.log("_max > ", _max);
    return _max;
  } else {
    return 0;
  }
};

/**
 * 获取一个数组的横向最大值
 * @param {Array} arr 对象数组
 */
export const getArrayXMax = (arr) => {
  if (Array.isArray(arr)) {
  } else {
    return 0;
  }
};
