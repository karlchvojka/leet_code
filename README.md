# LeetCode Tracking
## Version 1.0.0
LeetCode tracking is a simple repo for tracking Leetcode progress.

Currently working through the ['30 Days of JavaScript'](https://leetcode.com/studyplan/30-days-of-javascript/) Study plan

## Why track progression locally? Doesnt LeetCode have an editor?
Yes, but. Practice is practice.

The main purpose for this is to allow working on the lesson/challenge to happen locally. Also allows for a convenient backup of the work. While allowing for thought processes based around file structrue, command standards, and Git standards to occur naturally.

## Usage
### Lessons
Each study plan should be seperated into a folder, and each folder should have a seperate file for each lesson/challenge

```
~/<section>/<lesson_name>_<#>.js
```

### Creating a lesson file
A template to be used as a beginning point has been included within the repo [here](TEMP_lesson_1.js)

### Example of a completed lesson
```javascript
/**
 * Leetcode: Lesson 1
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

```

### Testing a Lesson
Lessons can be ran within the terminal via Node:

Eg:
```bash
node Lesson_1.js
```
