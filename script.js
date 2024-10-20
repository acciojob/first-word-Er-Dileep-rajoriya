function firstWord(s) {
  // Check if the input string is empty
  if (s.length === 0) {
    return ''; // Return an empty string
  }
  
  // Trim the string to remove leading spaces
  const trimmedString = s.trim();
  
  // Find the index of the first space
  const spaceIndex = trimmedString.indexOf(' ');
  
  // If there is no space, return the entire trimmed string
  if (spaceIndex === -1) {
    return trimmedString;
  }
  
  // Return the substring from the start to the first space
  return trimmedString.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
