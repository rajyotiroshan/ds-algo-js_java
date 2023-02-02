class Search {
  /**
   * @description 'swap array two position'
   */
  static swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  //Iterative approach

  static binaryIter(array, target) {
    // Write your code here.
    let startIndex = 0;
    let endIndex = array.length - 1;
    let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    while (array[midIndex] !== target && endIndex > startIndex) {
      if (array[midIndex] > target) {
        endIndex = midIndex - 1;
      } else {
        startIndex = midIndex + 1;
      }
      midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    }
    if (array[midIndex] === target) {
      return midIndex;
    }
    return -1;
  }
}

module.exports = Search;
