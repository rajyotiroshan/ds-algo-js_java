export default class Sort {
    constructor(arr) {
        this.arr  = arr;
    }

    /**
     * @description 'swap array two position'
     */
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    /**
     * @description 'Bubble sort'
     */

    bubble() { // [4,2,6,1,7,5,4]
        /**
         * Pseudo algo
         *  1. place the largest element at last (so it is not about placing the first lement or last at it's correct position)
         *   (So emphasis on position rather than eny elment, so find the element for the last place if in ascending order)
         *  2. the way bubble sort follows is start comparing two adjacenet element and switch 
         */
        let len = this.arr.length;
        
        for(let j=1; j<=len-1; j++) {
         for(let i=0; i <= len-2; i++) {//everytime you d
             if(this.arr[i] > this.arr[++i]) {
                 swap(this.arr, i, ++i);
             }
         }
        }
    }
}