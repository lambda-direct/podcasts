function* charGenerator(count, char) {
  while (true) {
    for (let i = 0; i < count; i++) yield char;
    for (let i = 0; i < count; i++) yield char + ".";
  }
}

const generatorsEasy = (str) => {
  const result = [];

  const gens = str.split("").map((char, index, arr) => {
    return charGenerator(2 ** index, char);
  });

  const num = 2 ** (str.length - 1);

  for (let i = 0; i < num * 2; i++) {
    result.push(gens.map((it) => it.next().value).join(""));
  }

  return result;
};

function* generators(str) {
  const gens = str.split("").map((char, index, arr) => {
    return charGenerator(2 ** index, char);
  });

  const num = 2 ** (str.length - 1);

  for (let i = 0; i < num; i++) {
    yield gens.map((it) => it.next().value).join("");
  }
}

const result = generators("abcd");

for (let item of result) {
    console.log(item)
}