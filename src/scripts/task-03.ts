const findLongestWord = function (string: string): string {
  return string.split(' ').sort((a, b) => b.length - a.length)[0];
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

export {};
