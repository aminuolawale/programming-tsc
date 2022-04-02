type Car = {
    engine: string,
    tyres : number
}

type Truck = {
    engine: string,
    tyres: number,
    cargo: number
}

type CarOrTruck = Car | Truck

type CarAndTruck = Car & Truck


const vehicle : CarAndTruck = {
    engine: "v12",
    tyres: 4,
    cargo: 34
}

const vehicle2: CarOrTruck = {
    engine: "v8",
    tyres: 4
}
console.log(vehicle, vehicle2)