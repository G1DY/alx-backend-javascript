export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    array[array.indexOf(value)] = appendString + value; /* eslint no-param-reassign: "error" */
  }

  return array;
}
