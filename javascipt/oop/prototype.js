let vechicle = {
    seats: 5,
    wheel: 4,
    doors: 2,
    }

    let car = {
        model: "lambo",
        color: "red",
        year: "2023",
        __proto__: vechicle
    }
console.log(car.doors);
console.log(car.color);
console.log(car["color"])
console.log(Object.keys(car))