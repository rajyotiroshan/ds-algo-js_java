//import Sort from "./Sort";
const Search = require("./Search");
/**
 * @description `Test different Sortings algorithms`
 */
let arr = [1, 2, 3, 5, 4, 6, 7];
arr = [2, 3, 5, 5, 6, 8, 9];
let target = 6;

console.log(
  `Binary search; [${arr}] for ${target} -->`,
  Search.binaryIter(arr, target)
);
