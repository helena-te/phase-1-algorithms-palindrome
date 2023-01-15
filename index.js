function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split("");
  const wordArray2 = word.split("")
  const flipWordArray = wordArray2.reverse();
  const flipString = flipWordArray.join("");
  console.log(wordArray);
  console.log(wordArray2)
  console.log(flipWordArray);
  if (word == flipString) {
    return true
  }
  else {return false};
//   const arrayLength = wordArray.length;
//   if (arrayLength % 2 == 0) {
//   const firstHalf = wordArray.slice(0,arrayLength/2);
//   const secHalf = wordArray.slice(arrayLength/2)
//   const flipSecHalf = secHalf.reverse();
//   console.log(firstHalf)
//   console.log(secHalf)
//   console.log(flipSecHalf)
//   if (flipSecHalf == firstHalf) {
//     return true;
//   }
//   else {return false};
// }
//   else {
//   const firstHalf = wordArray.slice(0,Math.floor(arrayLength/2));
//   const secHalf = wordArray.slice(Math.floor((arrayLength/2)+1))
//   const flipSecHalf = secHalf.reverse();
//   console.log(firstHalf)
//   console.log(secHalf)
//   console.log(flipSecHalf)
//   if (flipSecHalf == firstHalf) {
//     return true;
//   }
//   else {return false}; 
//   }
  

}

/* 
  Add your pseudocode here
  -get length of string
  case 1: odd number of letters 
  case 2: even number of letters
  case 1: -get length of string
  -divide
  case 2: -get length of string
  -divide length by 2, call string1 and string2
  -take 2nd half, flip it and reverse it.=newstring2
  -if string1 = string2, return true
  -if string1 dne string2, return false
  */

/*
  Add written explanation of your solution here
  -you gotta split the string into an array of individual characters and 
  also split the string/array in half
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
