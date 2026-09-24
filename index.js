function calculateTax(amount) {
  return amount * 0.1;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}

function isPalindrome(word) {
  const normalizedWord = word.toLowerCase();
  return normalizedWord === normalizedWord.split('').reverse().join('');
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
}

console.log(calculateTax(50)); // returns: 5
console.log(convertToUpperCase('Hello')); // returns: "HELLO"
console.log(findMaximum(14, 25)); // returns: 25
console.log(isPalindrome('Racecar')); // returns: true
console.log(calculateDiscountedPrice(100, 20)); // returns: 80

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};