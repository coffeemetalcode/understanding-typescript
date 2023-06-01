function add(a: number, b: number): number {
  return a + b;
}

function printResult(a: number): void {
  console.log(a);
}

console.log(typeof printResult(add(1, 2))); // undefined
console.log(typeof printResult); // function
console.log(typeof add); // function

// let combineValues: Function; // any function
let combineValues: (a: number, b: number) => number; // function with 2 number type params and which returns a number

combineValues = add;
// combineValues = 27;

function addAndHandle(a: number, b: number, cb: (num: number) => void) {
  const result = a + b;
  cb(result);
}

console.log(combineValues(5, 22)); // 27

addAndHandle(10, 20, (result) => {
  console.log(result); // 30
});