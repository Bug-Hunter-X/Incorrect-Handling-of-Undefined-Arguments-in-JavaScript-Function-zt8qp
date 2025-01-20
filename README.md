# Incorrect Handling of Undefined Arguments in JavaScript Function

This repository demonstrates a common JavaScript bug: improper handling of undefined function arguments.  The `myFunc` function in `bug.js` silently returns 0 when arguments are missing. This can lead to unexpected behavior and make debugging difficult.

The solution (`bugSolution.js`) shows how to handle undefined arguments more robustly, either by explicitly throwing an error or returning a meaningful value (like null) with appropriate error handling.