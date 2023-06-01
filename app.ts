let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Yo \'mama';

// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'.

function generateError(message: string, code: number): never { // never returns a value
  throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500);