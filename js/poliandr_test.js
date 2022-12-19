function palindrome(x) {
   return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}
console.log(palindrome('madam')); 