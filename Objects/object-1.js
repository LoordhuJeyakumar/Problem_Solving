const obj = {
  "level1.key1": "value1",
  "level1.key2.level2_key1": "value2",
  "level1.key2.level2_key2.level3_key1": "value3",
  "level1.key2.level2_key2.level3_key2.level4_key1": "value4",
};

function deflatten(obj) {
  let newObj = {};
  for (const key in obj) {
    let path = key.split(".");
    if (path.length === 1) {
      newObj[key] = obj[key];
    } else {
      for (let index = 0; index < path.length; index++) {
        if (newObj[path[index]] === undefined) {
          newObj[path[index]] = {};
        } else {
          deflatten(newObj[path[index]]);
          newObj[path[index]] = obj[path[index]];
        }
      }
    }
  }

  return newObj;
}

console.log(deflatten(obj));
