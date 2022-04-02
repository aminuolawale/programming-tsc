type Func = (name:string, age: number) => string



const func1: Func = (name, age) => {
    return `${name}-${age}`
}


console.log(func1("jon", 9))

// we don't need to declare the types again as typescript has infered this from the type of the function.
// this is contextual typing.