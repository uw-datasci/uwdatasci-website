export default function decode(value) {
  if (value instanceof Array) {
    return value.map((val) => decode(val));
  } else if (value instanceof Object) {
    const newValue = {};

    for (const [key, val] of Object.entries(value)) {
      newValue[decode(key)] = decode(val);
    }

    return newValue;
  } else {
    return decodeURIComponent(value);
  }
}