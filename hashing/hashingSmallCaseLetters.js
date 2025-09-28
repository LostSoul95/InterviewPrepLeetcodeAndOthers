




function MagicFunc(inputArr, target) {
    // size assumption as alphabets are till z and index at z is 25
    var size = 26;
    // create a clone array till size which is equivalent to the max element in input array
    // and fill all the elements with zero
    var hash = [];
    for (var i = 0; i < size + 1; i++) {
        hash.push(0);
    }
    console.log(hash);
    // do the hashing here 
    for (var i = 0; i < inputArr.length; i++) {
        console.log(inputArr[i] - 'a');
        hash[inputArr[i] - 'a'] += 1;
    }
    console.log(hash);
    // find the value here
    var findReps = hash[target - 'a'];
    return findReps;

}


var str = 'madhur'

var target = 'a';

var checkHash = MagicFunc(str, target);

console.log(checkHash);