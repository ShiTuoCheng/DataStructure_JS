/*js实现队列数据结构 */
/*jshint esversion: 6 */

class Queue {
  constructor(){
    this.data = [];
  }

  push(ele){
    this.data.push(ele);
  }

  del(){
    this.data.shift();
  }

  clear(){
    this.data.length = 0;
  }
}