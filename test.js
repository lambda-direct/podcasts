function* gen(period, letter) {
  while (true) {
    for (let i = 0; i < period; i++) yield letter;
    for (let i = 0; i < period; i++) yield letter + ".";
  }
}

// function* gen1(letter) {
//   while (true) {
//     console.log("2");
//     yield letter;
//   }
// }
const gen3 = gen("a", 1);
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());

const str = "abcde";

// const generators = str.split("").map((item, index, arr) => {
//   if (index === arr.length - 1) return gen1(item);
//   console.log(item, 2 ** index);
//   return gen(item, 2 ** index);
// });
// console.log(generators[1].next().value);
// console.log(generators[2].next().value);
//   console.log(generators[3].next().value);


// const result = [];
// for (let i = 0; i < 2 ** (str.length - 1); i++) {
// generators.map((it) => {
//   console.log(it.next().value);
//   return it.next();
// });
// result.push(word)
// }
