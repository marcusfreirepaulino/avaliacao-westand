interface Person {
  name: string;
  age: number;
}

function findOldest(input: Person[]): string {
  if (!input.length) {
    return "Input should contain at least one person.";
  }

  let oldest = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i].age > oldest.age) {
      oldest = input[i];
    }
  }

  return oldest.name;
}
