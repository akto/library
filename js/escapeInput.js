/* 
A simple escape function for backlashes, single and double quotes 
It was for Advent of Code 2024 3rd day puzzles.
*/
function escapeInput(input) {
    return input
        .replace(/\\/g, '\\\\')  // Escape backslashes
        .replace(/'/g, "\\'")    // Escape single quotes
        .replace(/"/g, '\\"');   // Escape double quotes
}
