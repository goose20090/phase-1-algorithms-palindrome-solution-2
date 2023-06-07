function isPalindrome(word) {
  // Write your algorithm here

  for (let i = 0; i < word.length / 2; i++) {
    let j = word.length - 1 - i;

    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  iterate through each letter of string
  for each letter, check if corresponding error from back of string is equal
  if not, return false

  If no false value is returned, return true
*/

/*
  Add written explanation of your solution here
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
