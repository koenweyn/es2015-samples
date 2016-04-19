/*
 ES2015 provides extended support for unicode in strings and regular expressions
 */

'use strict';

console.log('*** ES2015 supports unicode chars beyond 21-bit code-point ***');
let unicodeStringWide = '𠮷';
let unicodeString = 'ඕ';
console.log(`${unicodeStringWide} has length ${unicodeStringWide.length}`);
console.log(`${unicodeString} has length ${unicodeString.length}`);


console.log()

console.log('*** Use optional /u flag in regular expressions to treat the pattern as unicode code points ***')
console.log(unicodeStringWide.match(/./u)[0].codePointAt(0).toString(16)); // 0x20BB7
console.log(unicodeStringWide.match(/./)[0].codePointAt(0).toString(16)); // 0xD842


console.log('*** ES2015 introduces a new way to use unicode literals ***');

console.log('\u{20BB7}');
console.log('\uD842\uDFB7');
console.log('\u{D95}');
console.log('\u0D95');


console.log('*** for .. of iterates codepoints in a string ***');

// for-of iterates code points
for(var c of (unicodeString + unicodeStringWide)) {
  console.log(c.codePointAt(0).toString(16));
}
