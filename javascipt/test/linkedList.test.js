const LinkedList = require("../linkedlist/linkedList");

test("should check if the list is empty",()=>{
    let newList = new LinkedList();
    let isTrue = newList.isEmpty();
    expect(isTrue).toBe(true);

})

test("that element can be inserted at the head", ()=>{
     let list = new LinkedList();
     list.insertAtHead(5);
     let headValue = list.insertAtHead(5);
     expect(headValue).toBe(5);
})

test("test that linked list can detect number", ()=>{
    let node = new LinkedList();
    let 
})

