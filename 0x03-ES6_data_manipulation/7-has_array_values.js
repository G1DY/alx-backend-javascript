export default function hasValuesFromArray(set, array) {
  let ans = true;
  // eslint-disable-next-line array-callback-return
  array.map((Value) => {
    if (!set.has(Value)) {
      ans = false;
    }
  });

  return ans;
}
