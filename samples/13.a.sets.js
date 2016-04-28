
console.log('*** A set is a datastructure that retains insertion order, and rejects duplicates ***');
let alphabet = new Set();
alphabet.add('a').add('b').add('a').add('c');

console.log(`My alphabet has ${alphabet.size} letters`);

console.log('*** We can loop over values, keys, or entries, but all are the same ***');

console.log('values');
for(let letter of alphabet) {
  console.log(letter);
}
for(let letter of alphabet.values()) {
  console.log(letter);
}

console.log('keys');
for(let key of alphabet.keys()) {
  console.log(key);
}

console.log('*** We can easily test for value presence ***');

console.log(`Is 'a' in the alphabet? ${alphabet.has('a')}`);
console.log(`Is 15 in the alphabet? ${alphabet.has(15)}`);


console.log('*** We can create arrays from sets and vice versa');

let alphabetArray = Array.from(alphabet);
alphabet = new Set(alphabetArray.reverse());
for(let letter of alphabet) {
  console.log(letter);
}
