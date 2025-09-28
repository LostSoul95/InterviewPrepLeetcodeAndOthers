




function MagicFunc(inputArr,target,max) {
    // size assumption
    var size = max;
    // create a clone array till size which is equivalent to the max element in input array
    // and fill all the elements with zero
    var hash = [];
    for( var i=0; i <size +1;i++){
        hash.push(0);
    }
    console.log(hash);
    // do the hashing here 
    for(var i =0; i < inputArr.length;i++ ){
       hash[inputArr[i]] +=1;
    }
    console.log(hash);
    // find the value here
    var findReps =  hash[target];
    return findReps;

}


var arr = [1,12,3,12,1];
arr.sort((a,b) => a-b);

var target = 12;

var checkHash =  MagicFunc(arr,target,arr[arr.length - 1]);

console.log(checkHash);