
/** A ** prime number ** is a natural number greater than 1 that has no positive divisors other than 1 and itself.In other words, a prime number can only be divided evenly(without a remainder) by 1 and the number itself.

### Examples of Prime Numbers
  - 2(divisors: 1, 2)
  - 3(divisors: 1, 3)
  - 5(divisors: 1, 5)
  - 7(divisors: 1, 7)
  - 11(divisors: 1, 11)

### Non - Prime(Composite) Numbers
Numbers like 4, 6, 8, 9, 10 are ** not ** prime because they have divisors other than 1 and themselves.

### Note
  - 1 is ** not ** considered a prime number.
- 2 is the only even prime number.
**/
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function checkPrime() {
  const input = document.getElementById('numberInput').value;
  const number = parseInt(input);
  const result = document.getElementById('result');
  if (isNaN(number)) {
    result.textContent = "Please input A Number😡.";
    result.style.color = "red";
    return;
  }
  if (isPrime(number)) {
    result.textContent = `${number} Is a  Prime Number ☺️.`;
    result.style.color = "green";
  } else {
    result.textContent = `${number} Is Not a  Prime Number 😞.`;
    result.style.color = "red";
  }
}