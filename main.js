function add(x,y) {
    return (x + y)
}


function multiply (x,y) {
    let total= 0
    for(let position= 0; position < y; position += 1) {
        total = add(x, total)
    }
    return total
}

console.log(multiply(2,2))

function power(x,y) {
    let total = 1
    for(let position= 0; position < y; position += 1) {
        total = multiply(x,total)
    }
    return total 
}

console.log(power(2,3))

function factorial(x) {
    let total = 1
    for( let position = 1; position <= x; position ++) {
        total = multiply(position,total)
    }
    return total
}

console.log(factorial(9))