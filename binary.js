const binary = (str) => {
  const num = 2 ** (str.length - 1);

  const result = [];
  for (let i = 0; i < num; i++) {
    const binaryMask = i.toString(2).padStart(str.length - 1, "0");
    console.log(binaryMask);

    let tmp = "";
    for (let j = 0; j < str.length; j++) {
      tmp += str[j];
      tmp += binaryMask[j] === "1" ? "." : "";
    }
    result.push(tmp);
  }

  return result;
};

const binaryBits = (str) => {
  const num = 2 ** (str.length - 1);

  const result = [];
  for (let i = 0; i < num; i++) {
    let tmp = "";
    for (let j = 0; j < str.length; j++) {
      tmp += str[j];
    //   tmp += (i >> j) % 2 ? "." : "";
      tmp += (i >> j) & 1 ? "." : "";
    }
    result.push(tmp);
  }

  return result;
};

const num = 5;
const bin = 0b101;
const bin2 = 0b010;
const one = 0b001;
console.log((bin >> 1) & 1);
console.log(bin % 2);

console.log(binaryBits("abc"));
