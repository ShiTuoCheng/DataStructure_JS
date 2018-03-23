/* 字典数据结构 */
/* jshint esversion:6 */

class Dictionary{

  constructor(){
    this.data = {};
  }

  // 将对象变为可迭代
  *[Symbol.iterator](){
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        yield {key: this.data[key]};
      }
    }
  }

  add(key, value){
      this.data[key] = value;
      return true;
  }

  remove(selKey){
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        if(key === selKey){
          delete this.data[key];
          return true;
        }
      }
    }
  }
}

let map = new Dictionary();

map.add(1,2);

for (const item of map) {
  console.log(item);
}
