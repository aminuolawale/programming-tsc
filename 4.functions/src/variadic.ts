function variadic(...args){
    return Array.from(args).reduce((a,b) => (a+b))
}


const result: number = variadic(1,2,3,4)
console.log(result)

// here ...args is a rest parameter which is different from optional or default parameters.