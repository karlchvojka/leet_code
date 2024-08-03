/**
 * Leetcode Lesson 1
 * @description Hello World #2667
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 * 
 * @see {@link https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript}
 * 
 * @param {string} none - No params needed
 * @example
 * const f = createHelloWorld();
 * f(); // "Hello World"
 * @returns {Function} The function returned by New function that always returns "Hello World"
 */
var createHelloWorld = function() {
    
  return function(...args) {
      return 'Hello World'
  }
};

/**
* Runs file, returns result to terminal
* For purposes of file being ran in a terminal.
*/
console.log(createHelloWorld()());
