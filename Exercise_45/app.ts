function carInfo(manufacturer: string, model: string, options:{[key: string]: any }[]): {manufacturer: string, model: string, [key: string]: any }{
    const car:{manufacturer:string, model:string, [key:string]: any} = { manufacturer, model};
    for (let option of options){
        const [key, value] = Object.entries(option)[0];
        car[key] = value;
    }
    return car;
}
const myCar = carInfo("Toyota", "Corolla", [{ color: "blue" }, { year: 2022 }]);
console.log(myCar);

