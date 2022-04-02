console.log("Hey this is my ts file!")

let a = 1 + 2
let b = a + 3
let c = {
    apple: a,
    banana: b,
}

let d = c.apple * 4

let e = "e"

// invalid assignments
let f:number = d + e

let g = ["<<<"]

let h = c * g