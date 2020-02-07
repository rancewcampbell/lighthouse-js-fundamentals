// for (let x = 100; x <= 200; x++) {
//   if (x % 3 === 0 && x % 4 === 0) {
//     console.log('LoopyLighthouse');
//   } else if (x % 3 === 0) {
//     console.log('Loopy');
//   } else if (x % 4 === 0) {
//     console.log('Lighthouse');
//   } else {
//     console.log(x);
//   }
// }

function loopyLighthouse(range, multiples, words) {
  for (let x = range[0]; x <= range[1]; x++) {
    if (x % multiples[0] === 0 && x % multiples[1] === 0) {
      console.log(words.join(''));
    } else if (x % multiples[0] === 0) {
      console.log(words[0]);
    } else if (x % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(x);
    }
  }
}

loopyLighthouse([ 0, 100 ], [ 5, 6 ], [ 'Holy', 'Cow' ]);
