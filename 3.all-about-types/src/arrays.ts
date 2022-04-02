let arr1 = []
let arr2: string[] = []
arr2.push("new string")
// arr2.push(2) -> error

let arr3: boolean[] = [true]
arr3.push(false)
// arr3.push("fake") -> error

let arr4: true[] = [true]
// let arr5: false[] = [true] -> error

let arr6 = []
arr6.push("dd")
arr6.push(5)

function buildArray() {
    let theArray = []
    theArray.push(1)
    theArray.push("2")
    return theArray
    // once the array  leaves the scop it was defined in, its type gets fixed.
}


const builtArray = buildArray()
// builtArray.push(true) -> error
builtArray.push("dd")