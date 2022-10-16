// Anonymus Function
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
let odds = arr. filter(n => n%2)
console. log(odds)

// Using Title caps
function sentenceCase (str) {
    if ((str===null) || (str===''))
         return false;
    else
     str = str.toString();
   
   return str.replace(/\w\S*/g,
  function(txt){return txt.charAt(0).toUpperCase() +
         txt.substr(1).toLowerCase();});
  }
   
  document.write(sentenceCase('geeks for geeks'));


//   Sum of all number in a array

var arr = [4, 8, 7, 13, 12]
  

var sum = 0;


for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

document.write("Sum is " + sum)


// Prime numbers

var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);