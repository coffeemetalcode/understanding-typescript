type Combo = number | string;
type Conversion = 'as-number' | 'as-text';

/* function combine(a: number | string, b: number | string, c: 'as-number' | 'as-text'): number | string {
  let result: number | string;
  if (c === 'as-number') {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }
  
  console.log(result);
  return result;
}; */

function combine(a: Combo, b: Combo, c: Conversion): Combo {
  let result: Combo;
  if (c === 'as-number') {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }
  
  console.log(result);
  return result;
};

combine(9, 24, 'as-number');
combine('pussy', 'cat', 'as-text');
combine('4', '8', 'as-number');