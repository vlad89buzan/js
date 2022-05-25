function printText(name,age){
    console.log(`My name is ${name}, my age is ${age}`)
}
printText('vlad',32)


let obj = {
    name:'Ivan',
    age:18,
    hello(){
        console.log(this.name)
    }
}
obj.hello()


let arr = [1,22,3,44,5,34,5]

arr.sort((a,b)=>{
    // if(a==b) return 0;
    // if(a>b) return 1;
    // if(a<b) return -1;
return(a-b)
    
})
console.log(arr)



function fibonachi (count){
    let fib=[];
    for (let i = 0; i < count; i++) {
        if(i==0) fib[i] = 1;
       else if (i==1) fib[i] = 2;
       else fib[i] = fib[i-2]+fib[i-1]
        
    }
    return fib
}
let f=fibonachi(10);
console.log(f)

function factorial (n){
    let fac=1;
    if(n==0) return 1;
    for (let i = 1; i <= n; i++){
       fac *= i;
    }
    return fac;
}

