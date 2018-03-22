/*js实现栈数据结构 */
/*jshint esversion:6 */

class Stack {

  constructor(){
    this.length = length;
    this.data = [];
  }

  size() {
    return this.length;
  }

  clear() {
    this.data.length = 0;
    return true;
  }

  push(ele){
    this.data.push(ele);
    this.length++;
    return true;
  }

  del(){
    if(this.data.length !== 0){

      this.data.pop();
      this.length--;
      return true;
    }else{
      return false;
    }
  }

}