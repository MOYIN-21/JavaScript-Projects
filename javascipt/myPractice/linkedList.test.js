const LinkedList = require("./linkedList")
test("should check if the list is empty",()=>{
    let newList = new LinkedList();

    expect(newList.isEmpty()).toBe(true);
})

test("value can be added to the head")
let 