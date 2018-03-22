/* js实现集合数据结构 */
/* jshint esversion:6 */

class Set{

  constructor(){
    this.data = [];
  }

  // 将set变为可迭代
  [Symbol.iterator](){
    let index = 0;
    let self = this;
    return {
      next(){
        if(index < self.data.length){
          return {value: self.data[index++], done: false};
        }else{
          return {done: true};
        }
      }
    };
  }

  has(ele){
    return this.data.includes(ele);
  }

  add(ele){
    if(!this.has(ele)){
      this.data.push(ele);
      return true;
    }else{
      return false;
    }
  }

  remove(ele){
    this.data.forEach((v, i) => {
      if(v === ele){
        this.data.splice(i, 1);
      }
    });
  }
}

let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(5);
set.add(6);
set.add(7);
set.add(8);
set.add(9);

for (const ele of set) {
  console.log(ele);
}