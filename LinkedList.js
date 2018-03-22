/*js实现链表数据结构*/
/*jshint esversion: 6 */

// 一个链表节点 
class Node {
  constructor(ele){
    this.ele = ele;
    this.next = null;
  }
}

class LinkedList {
  constructor(headEle){
    this.head = new Node(headEle);
    this.length = length;
  }

  // 出入一个节点

  append(element){
    const node = new Node(element);
    if(this.head === null){
      this.head = node;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.index++;
  }

  // 在某个位置插入一个节点
  appendAt(elemenet, position){
    if(position > -1 && position <= this.length){
      let node = new Node(elemenet);
      if(position === 0){
        this.head = node;
      }else{
        let index = 0,
            current = this.head, // 从第一个节点开始
            previous;
        while(index++ < position){
          previous = current;
          current = current.next;
        }

        node = current.next;
        previous.next = node;
      }
    }else{
      return false;
    }
  }

  // 移除一个节点
  removeAt(position){
    if(position > -1 && position <= this.length){
      if(position === 0){
        this.head = current.next;
      }else{
        let index = 0,
            current = this.head, // 从第一个节点开始
            previous;

        while(index++ < position){
          // to-do
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }
    }
  }
}
