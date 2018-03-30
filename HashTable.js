/* 散列表数据结构 */
/*jshint esversion:6 */

import LinkedList from './LinkedList';

class HashTable{
  
  constructor(){
    this.data = [];
  }

  // 散列函数
  loseHash(key){
    let hash = 0;
    [...key].forEach((v, i) => {
      hash += key.charCodeAt(i);
    });

    return hash % 33;
  }

  put(key, value){
    const position = this.loseHash(key);
    // 防止碰撞 用链表存储key值碰撞的元素
    if(this.data[position] !== void(0)){
      this.data[position] = new LinkedList();
    } 
    this.data[position].append(new ValuePair(key, value));
  }

  get(key){
    const position = this.loseHash(key);
    if(this.data[position] !== void(0)){
      let current = this.data[position].head;

      // 遍历链表
      while(current.next){
        if(current.element.key === key){
          
        }
      }
    }
    return this.data[position];

  }

  remove(key){
    const position = this.loseHash(key);
    this.data[position] = void(0);
  }
}

class ValuePair{
  constructor(key, value){
    this.key = key;
    this.value = value;
  }

  // 重写Object原型toString
  toString(){
    console.log(this.key+ '-' +this.value);
  }
}

let hashTable = new HashTable();

hashTable.put('A', 'shituocheng@gmail.com');

console.log(hashTable.get('A'));