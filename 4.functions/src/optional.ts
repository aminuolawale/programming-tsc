// optional and default parameters

function func(name: string, age?:number):{name:string, age:undefined|number}{
    return {
        name, age
    }
}

function func1(name: string, age:number=10):{name:string, age:number}{
    return {
        name, age
    }
}