console.log('task-01');

const logItems = function <T>(array: T[]): void {
  for (let i: number = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
console.log('');
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

export {};
