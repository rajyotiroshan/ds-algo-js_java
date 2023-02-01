class Sort {
  /**
   * @description 'swap array two position'
   */
  static swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  /**
   * @description 'Bubble sort'
   */

  static bubble(arr) {
    console.log("bubble sorts:: ");
    // [4,2,6,1,7,5,4]
    /**
     * Pseudo algo
     *  1. place the largest element at last (so it is not about placing the first lement or last at it's correct position)
     *   (So emphasis on position rather than eny elment, so find the element for the last place if in ascending order)
     *  2. the way bubble sort follows is start comparing two adjacenet element and switch
     *  3. optimization: now you would not want to go after the already sorted part at last for awaping
     *  so you would want to got to len-2-j
     * 4. Now again if your array is already sorted then after 1st iteration you would not want to iterate for the 2nd loop
     * so your time complexitu will be O(n)
     * but how you will know this..you will keep track of swaping operation, if there is no swaping in the first iteration
     * then that means that your array is already sorted.
     */
    let len = arr.length;
    let totalOuterIter = 0;
    let countSwap = 0;
    for (let j = 1; j <= len - 1; j++) {
      for (let i = 0; i <= len - 2 - j; i++) {
        //everytime you d
        if (arr[i] > arr[i + 1]) {
          Sort.swap(arr, i, i + 1);
          countSwap++;
        }
      }
      totalOuterIter += 1;
      if (countSwap === 0) {
        // after ith iteration your array is already sorted
        break;
      }
    }
    console.log(`Total swap count:: ${countSwap}`);
    console.log(`Total outer iteration:: ${totalOuterIter}`);
    return arr;
  }
}

module.exports = Sort;
