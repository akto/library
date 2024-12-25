function reverseWord( word ){
  return word.split("").reverse("").join("");
}

// Don't forget add compareNumbers function if you want a proper sort for numbers.
const compareNumbers = (a,b) => a-b;
//candles.sort(compareNumbers);

function createGrid(input){
    const rows = input.trim().split("\n");
    const grids = rows.map(row => row.split(""));
    return grids;
}
//const searchGrid = createGrid(searchText);

function countOccurrences(grid, word) {
    const rows = grid.length;
    const cols = grid[0].length;
    const wordLength = word.length;
    let count = 0;

    // Helper function to search in a specific direction
    function searchDirection(startRow, startCol, deltaRow, deltaCol) {
        for (let i = 0; i < wordLength; i++) {
            const newRow = startRow + deltaRow * i;
            const newCol = startCol + deltaCol * i;

            if (
                newRow < 0 || newRow >= rows ||
                newCol < 0 || newCol >= cols ||
                grid[newRow][newCol] !== word[i]
            ) {
                return false;
            }
        }
        return true;
    }

    // Directions to search [deltaRow, deltaCol]
    const directions = [
        [0, 1],   // Right
        [0, -1],  // Left
        [1, 0],   // Down
        [-1, 0],  // Up
        [1, 1],   // Down-Right
        [1, -1],  // Down-Left
        [-1, 1],  // Up-Right
        [-1, -1]  // Up-Left
    ];

    // Iterate over the grid and search in all directions
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            for (const [deltaRow, deltaCol] of directions) {
                if (searchDirection(row, col, deltaRow, deltaCol)) {
                    count++;
                }
            }
        }
    }

    return count;
}

function countPatternOccurrences(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
  
    function isPatternFound(centerRow, centerCol) {
        const positions = [
            [-1, -1], [-1, 1],  // Top-left and Top-right
            [1, -1], [1, 1],     // Bottom-left and Bottom-right
        ];

        // Check both the normal, reversed and double directions pattern (MAS or SAM) 
        const patterns = [
            ["M", "S", "M", "S"],
            ["S", "M", "S", "M"],
            ["M", "M", "S", "S"],
            ["S", "S", "M", "M"]];
        for (let pattern of patterns) {
            let match = true;
            // Iterate through the positions to check if they match the pattern
            for (let i = 0; i < positions.length; i++) {
                const [deltaRow, deltaCol] = positions[i];
                const newRow = centerRow + deltaRow;
                const newCol = centerCol + deltaCol;
                // Ensure the coordinates are within bounds
                if (
                    newRow < 0 || newRow >= rows ||
                    newCol < 0 || newCol >= cols ||
                    grid[newRow][newCol] !== pattern[i]
                ) {
                    match = false;
                    break;
                }
            }

            if (match) {
                return true;
            }
        }

        return false;
    }
    // Iterate through the grid
    for (let row = 1; row < rows - 1; row++) {
        for (let col = 1; col < cols - 1; col++) {
            // If the current cell is 'A', check if it forms an "X" pattern in grid
            if (grid[row][col] === "A" ) {
                if(isPatternFound(row, col)){ count++; }
                
            }
        }
    }

    return count;
}

/* code to calculate diagonal numbers of a matrix */
function diagonalDifference(arr){
    let length = arr.length-1;
    let leftSum = 0, 
        rightSum = 0;
    for(let i=0;i<=length;i++){
        leftSum += arr[i][i];
        rightSum += arr[i][length-i];
        //console.log(i+" - "+ arr[i][i]);
        //console.log(i+" - "+arr[i][length-1-i]);
    }
    return Math.abs(leftSum-rightSum);
}
const arr1 = [[11,2,4],[4,5,6],[10,8,-12]];
diagonalDifference(arr1);
