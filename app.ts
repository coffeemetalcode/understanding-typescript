/* const person: {
  name: string;
  age: number;
} = { */

/* const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: 'David',
  age: 47,
  hobbies: ['Guitar', 'Pickleball', 'eCommerce'],
  role: [3, 'baller'],
}; */

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'David',
  age: 47,
  hobbies: ['Guitar', 'Pickleball', 'eCommerce'],
  role: Role.ADMIN,
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

console.log(person.role);