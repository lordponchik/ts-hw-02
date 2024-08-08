console.log('task-02');

const calculateEngravingPrice = function (message: string, pricePerWord: number): number {
  return message.split(' ').length * pricePerWord;
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); //240

export {};
