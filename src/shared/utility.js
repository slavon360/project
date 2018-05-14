export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const propertiesExtractor = (obj, keys, arr, setTitle) => {
    let updatedObj = {};
    for (let key in obj) {
        if (keys.indexOf(key) >= 0){
          updatedObj[key] = obj[key];
          setTitle && (updatedObj[key].title = key);
          arr && arr.push(updatedObj[key]);
        }
    }
    if (arr) return arr;
    return updatedObj;
}
export const addObjectName = (obj, key, arr) => {
    obj.name = key;
    arr && arr.length === 0 && (obj.checked = true);
    arr && arr.push(obj);
    return obj;
}

export const objectIntoArray = (obj, keys, cb) => {
    let arr = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && cb) {
        keys ? cb(obj[key], keys, arr) : cb(obj[key], key, arr);
      } else if (obj.hasOwnProperty(key)) {
        arr.push(obj[key]);
      }
    }
    return arr;
}
export const setCurrentClasses = (classesArr, currentClasses, classes) => {
    let updClasses = currentClasses.slice();
    classesArr.forEach((cl) => {
      updClasses.push(classes[cl]);
    });
    return updClasses;
}
