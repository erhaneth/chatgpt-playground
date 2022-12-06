function isPalindrome(string) {
    let reversedString = ""
  
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i]
    }
  
    if (string === reversedString) {
      return true
    } else {
      return false
    }
  }

  

  function isPalindrome(string) {
    let reversedString = ""
  
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i]
    }
  
    return string === reversedString
  }
// This reduces the number of lines of code and 
// makes the function easier to read and understand.

// The function now simply returns the result of the 
// comparison between the original string and the reversed 

// This makes the code more concise and efficient.