/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 *
 * Check if the queen and king are in the same row, column, or diagonal
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  let currentNum = num;
  const RomanNumerals = ['X', 'IX', 'V', 'IV', 'I'];
  const numbers = [10, 9, 5, 4, 1];

  for (let i = 0; i < numbers.length; i += 1) {
    while (currentNum >= numbers[i]) {
      currentNum -= numbers[i];
      result += RomanNumerals[i];
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const numbersToWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];
    const digit = parseInt(char, 10);
    switch (char) {
      case '.':
      case ',':
        result += `point `;
        break;
      case '-':
        result += `minus `;
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (i === numberStr.length - 1) {
          result += `${numbersToWords[digit]}`;
        } else {
          result += `${numbersToWords[digit]} `;
        }
        break;
      default:
        break;
    }
  }
  return result;
}
/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }
  return str === reversed;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numString = String(num);
  const digitString = String(digit);

  for (let i = 0; i < numString.length; i += 1) {
    if (numString[i] === digitString) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const l = arr.length;
  let sum = 0;
  for (let i = 0; i < l; i += 1) {
    sum += arr[i];
  }

  let leftSum = 0;
  let rightSum = sum;

  for (let i = 0; i < l; i += 1) {
    rightSum -= arr[i];
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  let startInd = 0;
  let endInd = size - 1;
  let currNum = 1;

  while (startInd <= endInd) {
    for (let col = startInd; col <= endInd; col += 1) {
      matrix[startInd][col] = currNum;
      currNum += 1;
    }

    for (let row = startInd + 1; row <= endInd; row += 1) {
      matrix[row][endInd] = currNum;
      currNum += 1;
    }

    for (let col = endInd - 1; col >= startInd; col -= 1) {
      matrix[endInd][col] = currNum;
      currNum += 1;
    }

    for (let row = endInd - 1; row > startInd; row -= 1) {
      matrix[row][startInd] = currNum;
      currNum += 1;
    }

    startInd += 1;
    endInd -= 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrixCopy = matrix;
  const result = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i += 1) {
    result[i] = new Array(matrix.length);
  }
  let start = 0;
  const end = matrix.length - 1;
  for (let i = 0; i <= end; i += 1) {
    for (let j = 0; j <= end; j += 1) {
      result[i][j] = matrix[end - j][start];
    }
    start += 1;
  }
  for (let i = 0; i <= end; i += 1) {
    for (let j = 0; j <= end; j += 1) {
      matrixCopy[i][j] = result[i][j];
    }
  }
  return matrixCopy;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function swap(arr, l, r) {
  const arrCopy = arr;
  const temp = arrCopy[l];
  arrCopy[l] = arrCopy[r];
  arrCopy[r] = temp;
}

function partition(arr, leftPointer, rightPointer) {
  let l = leftPointer;
  let r = rightPointer;
  const pivot = arr[Math.floor((leftPointer + rightPointer) / 2)];

  while (l <= r) {
    while (arr[l] < pivot) {
      l += 1;
    }
    while (arr[r] > pivot) {
      r -= 1;
    }
    if (l <= r) {
      swap(arr, l, r);
      l += 1;
      r -= 1;
    }
  }
  return l;
}

function sortByAsc(arr, leftPointer = 0, rightPointer = arr.length - 1) {
  if (arr.length < 2) return arr;

  const index = partition(arr, leftPointer, rightPointer);

  if (leftPointer < index - 1) {
    sortByAsc(arr, leftPointer, index - 1);
  }
  if (rightPointer > index) {
    sortByAsc(arr, index, rightPointer);
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let strCopy = str;
  let iterationsLeft = iterations;

  while (iterationsLeft) {
    let oddChars = '';
    let evenChars = '';

    for (let i = 0; i < strCopy.length; i += 1) {
      if (i % 2) {
        oddChars += strCopy[i];
      } else {
        evenChars += strCopy[i];
      }
    }
    strCopy = `${evenChars}${oddChars}`;
    iterationsLeft -= 1;

    if (strCopy === str) {
      iterationsLeft = iterations % (iterations - iterationsLeft);
    }
  }
  return strCopy;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 * if number less than 10, there is no sence in a function, just return number
 * create an array to store digits of num
 * convert a number to an array of digits
 * we should start before last element - initialize i equal to the before-last index
 
 * Find the first pair of adjacent digits from right to left where digits[i] < digits[i + 1] - for this - 
 * go from end to start and compare while i >= 0 and digits[i] >= digits[i + 1] - decrement i
 * digits[i] >= digits[i + 1] *- this checks that the oeder is still ascending
 * 
 * If no such pair is found, it means, that all digits are in an ascending order
 * the number is already the largest possible
 * in this case i equals -1 return num 
 * 
 * to find a value, which will be swapped -
 * it should be the smallest digit to the right of digits[i] that is larger than digits[i]
 * create and initialize J equals to the last index
 * while digits[j-last] <= digits[i - beforeLast] - decrement J
 * 
 * Swap digits[i] and digits[j]
 * Reverse the subarray to the right of digits[i], that part starts with index i+1
 * Convert the array of digits back to a number and return it
 */
function getNearestBigger(number) {
  if (number < 10) return number;
  const numberArr = Array.from(String(number), (el) => Number(el));
  let i = numberArr.length - 2;

  while (i >= 0 && numberArr[i] >= numberArr[i + 1]) {
    i -= 1;
  }

  if (i === -1) return number;

  let j = numberArr.length - 1;
  while (numberArr[j] <= numberArr[i]) {
    j -= 1;
  }
  const temp = numberArr[i];
  numberArr[i] = numberArr[j];
  numberArr[j] = temp;

  let left = i + 1;
  let right = numberArr.length - 1;

  while (left < right) {
    const temp2 = numberArr[left];
    numberArr[left] = numberArr[right];
    numberArr[right] = temp2;
    left += 1;
    right -= 1;
  }

  return parseInt(numberArr.join(''), 10);
}
module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
