// Task 7: Understand function scope

// Understand function scope
// global scope
const globalVariable = 30;

let var1 = (globalVariable) =>{
    return globalVariable;
}
console.log(var1(globalVariable));

// local scope

let var2 =() =>{
    const a = 10
}
result = var2(3);
console.log(result);