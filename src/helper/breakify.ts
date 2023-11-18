import elements from '../config/elements';

export default function breakify(str: string) {
  const length = str.length;
  let result: string[] = [];
  for (let i = 0; i < length; i++) {
    const oneChar = str[i].toUpperCase();
    const twoChar = `${oneChar}${str[i + 1]}`;

    if (elements.includes(twoChar)) {
      result = [str.slice(0, i), twoChar, str.slice(i + 2, length)];
      break;
    }
  }
  console.log(result);
  return result;
}
