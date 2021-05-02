// > abc
// [abc, a.bc, ab.c, a.b.c]

const dotsSimple = (str) => {
  let result = [str[0]];

  for (let i = 1; i < str.length; i++) {
    const slice = result.slice();
    const copy = slice.map((value) => value + ".");
    result = [...result, ...copy];
    result = result.map((value) => value + str[i]);
  }
  return result;
};

const dotsSimpleRec = (str, offset = 1, result = [str[0]]) => {
  if (offset === str.length) {
    return result;
  }

  const char = str[offset];
  const copy = result.slice().map((it) => it + ".");
  result.push(...copy);
  result = result.map((it) => it + char);
  return dotsSimpleRec(str, offset + 1, result);
};

const dotsRec = (str, tmp = [str[0]]) => {
  if (str.length === 1) {
    return tmp;
  }

  const char = str[1];

  str = str.slice(1);

  const nextWithDots = tmp.slice().map((it) => it + "." + char);
  const nextWithoutDots = tmp.map((it) => it + char);

  const withoutDots = dotsRec(str, nextWithoutDots);
  const withDots = dotsRec(str, nextWithDots);

  return [...withoutDots, ...withDots];
};

const dotsRecDan = (str, flag, tmp = [str[0]]) => {
  const char = str[1];
  str = str.slice(1);
  tmp = tmp.slice().map((it) => it + (flag ? "." : "") + char);

  if (str.length === 1) {
    return tmp;
  }

  const withoutDots = dotsRecDan(str, false, tmp);
  const withDots = dotsRecDan(str, true, tmp);
  return [...withoutDots, ...withDots];
};

console.log([...dotsRecDan("abcd", false), ...dotsRecDan("abc", true)]);
