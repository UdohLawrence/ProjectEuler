let sum = 0;
function multiplesOf3And5() {
  for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

let result = multiplesOf3And5();

console.log(result);
