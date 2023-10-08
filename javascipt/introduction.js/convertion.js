let library = {
    id : "56",
    available : "available",
    count: "20",
    name: "name",
    author: "author"
}
// console.log(Number(library.id))
library.id = Number(library.id).valueOf()
library.available = Boolean(library.available).valueOf()
library.count = Number(library.count).valueOf()
library.name = String(library.name).valueOf()
library.author = String(library.author).valueOf()
console.log(library)