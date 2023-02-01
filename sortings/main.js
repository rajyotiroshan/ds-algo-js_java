//import Sort from "./Sort";
const Sort = require("./Sort");
/**
 * @description `Test different Sortings algorithms`
 */
let arr = [1, 2, 3, 5, 4, 6, 7];

console.log("Using Bubble sort", Sort.bubble(arr));
console.log("Using insertion sort", Sort.insertion(arr));
