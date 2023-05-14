const checkSudoku = (sudoku) => {
    // Validate size of Sudoku grid
    const size = sudoku.length;
    const sqrt = Math.sqrt(size);
    if (size <= 0 || sqrt !== Math.floor(sqrt)) {
        console.log("Invalid Sudoku grid size");
        return false;
    }

    // Verify each row
    for (let i = 0; i < size; i++) {
        const row = new Set(sudoku[i]);
        if (row.size !== size) {
            console.log(`Invalid row ${i}`);
            return false;
        }
    }

    // Verify each column
    for (let i = 0; i < size; i++) {
        const column = new Set();
        for (let j = 0; j < size; j++) {
            column.add(sudoku[j][i]);
        }
        if (column.size !== size) {
            console.log(`Invalid column ${i}`);
            return false;
        }
    }

    // Verify each sub-grid
    for (let i = 0; i < size; i += sqrt) {
        for (let j = 0; j < size; j += sqrt) {
            const subgrid = new Set();
            for (let k = i; k < i + sqrt; k++) {
                for (let l = j; l < j + sqrt; l++) {
                    subgrid.add(sudoku[k][l]);
                }
            }
            if (subgrid.size !== size) {
                console.log(`Invalid sub-grid starting at (${i},${j})`);
                return false;
            }
        }
    }

    // If all rows, columns, and sub-grids are valid, the Sudoku sudoku is valid
    console.log("Valid sudoku");
    return true;
}

const sudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

checkSudoku(sudoku); // Output: Valid Sudoku sudoku!