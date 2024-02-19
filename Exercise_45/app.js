"use strict";
function carInfo(manufacturer, model, options) {
    const car = { manufacturer, model };
    for (let option of options) {
        const [key, value] = Object.entries(option)[0];
        car[key] = value;
    }
    return car;
}
const myCar = carInfo("Toyota", "Corolla", [{ color: "blue" }, { year: 2022 }]);
console.log(myCar);
