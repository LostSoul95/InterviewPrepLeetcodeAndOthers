// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function palindromeCheck(str,left,right){
    console.log(str[left]);
    console.log(str[right]);

    if( left >= right){
        return true;
    }
    if(str[left] !== str[right]){
        return false;
    }
   return palindromeCheck(str,left +1 ,right -1)
}

function  palindromeCall(str){
    var left = 0;
    var right = str.length - 1;
    return palindromeCheck(str,left,right);
  
}

var inputString = "naman";
 
var checkForPalindrome =  palindromeCall(inputString);

if(checkForPalindrome == true){
    console.log("It is a plaindrome");
}else{
    console.log("It is not a plaindrome");
}