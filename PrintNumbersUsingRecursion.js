// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function printNumber(num,target){
    if(num <= target){
        console.log(num);
        num =  num + 1;
        return printNumber(num,target)
    }else{
        return;
    }
}

printNumber(5,15);