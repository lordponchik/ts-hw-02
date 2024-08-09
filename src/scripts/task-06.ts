console.log('task-06');

let input: string | null;
const numbers: number[] = [];
let total: number = 0;

do {
  input = prompt('Введите число');

  if (input !== null)
    if (isNaN(Number(input))) {
      alert('Было введено не число, попробуйте еще раз');
    } else {
      numbers.push(Number(input));
    }
} while (input !== null);

for (const value of numbers) {
  total += value;
}

console.log(total);

export {};
