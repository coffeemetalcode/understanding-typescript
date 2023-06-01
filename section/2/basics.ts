function add(a: number, b: number, p: boolean): number {
  const result = a + b;
  if (p) {
    console.log(result);
  }
  return result;
}

const num1 = 9;
const num2 = 7;
const printResult = true;

const result = add(num1, num2, printResult);
// console.log(result);