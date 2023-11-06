const Native = require("./constructorFunction")

function Wimp(firstName, lastName, _scvID, cohort, _age){
    Native.call(this, firstName, lastName, _scvID, cohort);
    let age = _age;

    this.setAge = (newAge) => {
        age = newAge;
    }

    this.getAge = () => {
        return age;
    }
}

let student1 = new Wimp("kene", "uzor", "002567ert", 19, 21);
// console.log(student1.hasLaptop)
console.log(student1.getScvID())
console.log(student1.firstName)