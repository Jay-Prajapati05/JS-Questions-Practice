/* Q19. Implement a function `zigzagEncode(str, rows)` that encodes a string in a zigzag pattern and reads it row by row (Rail Fence Cipher).
zigzagEncode("WEAREDISCOVERING", 3)
 → "WECRIERDSOEEAIVNG" (roughly)
*/

function zigzagEncode(str, rows) {
  if (rows === 1 || rows >= str.length) {
    return str;
  }

  const rowArray = [];

  for (let i = 0; i < rows; i++) {
    rowArray.push("");
  }

  let currentRow = 0;
  let direction = 1;

  for (let i = 0; i < str.length; i++) {
    rowArray[currentRow] += str[i];

    if (currentRow === 0) {
      direction = 1;
    } else if (currentRow === rows - 1) {
      direction = -1;
    }

    currentRow += direction;
  }

  return rowArray.join("");
}

console.log(zigzagEncode("WEAREDISCOVERING", 3));
