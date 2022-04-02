function add(a:number, b: number): number{
    return a + b
}


console.log(add(1,2))

console.log(add.apply(null, [1,2]))
console.log(add.call(null, 1,2))
console.log(add.bind(null, 1,2)())