
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