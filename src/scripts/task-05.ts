console.log('task-05');

const checkForSpam = function (message: string): boolean {
  return message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

export {};
