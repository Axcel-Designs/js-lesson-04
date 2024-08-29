// Task 8: Use closure

function machine(){
    const b =`welcome to my palace`
    const a =()=>{
        return b;
    }
    console.log(a());
}
console.log(machine()); 