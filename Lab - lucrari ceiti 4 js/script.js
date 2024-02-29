const root = document.getElementById('root');
const size = {rows: 4, cols: 4}

const matrix = [];
const values = [];
const initialValues = [...Array(16).keys()];
const zerosPosition = {x: -1, y: -1};

const fullFillRandom = (rows, cols) => {
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            const random = getRandom();
            if (random === 0) {
                zerosPosition.x = i;
                zerosPosition.y = j;
            }
            row[j] = random;
        }
        values.push(row)
    }
}

const getRandom = () => {
    const minRange = 0;
    const maxRange = initialValues.length;
    const random = Math.floor(Math.random() * (15 - minRange + 1) + minRange);
    const value = initialValues[random];

    if (value !== undefined) {
        initialValues.splice(random, 1);
        return value;
    }

    return getRandom();
}

const createColumn = (tr, currentRow, currentColumn) => {
    const td = document.createElement('td');
    td.setAttribute('onclick', `changePosition(${currentRow}, ${currentColumn})`)
    const value = values[currentRow][currentColumn]
    td.innerText = value === 0 ? "" : value;

    tr.appendChild(td)
    return td;
}

const createRow = (table, cols, currentRow) => {
    const tr = document.createElement('tr');
    const colElements = [];

    for (let i = 0; i < cols; i++) {
        colElements.push(createColumn(tr, currentRow, i))
    }

    table.appendChild(tr);
    return colElements;
}

const createTable = (cols, rows) => {
    fullFillRandom(rows, cols)

    const table = document.createElement('table');
    table.classList.add("game-table");

    for (let i = 0; i < rows; i++) {
        matrix.push(createRow(table, cols, i));
    }

    root.appendChild(table);
}

const draw = () => {
    for (let i = 0; i < size.rows; i++) {
        for (let j = 0; j < size.cols; j++) {
            const value = values[i][j];

            matrix[i][j].innerText = value === 0 ? "" : value;
        }
    }
}

const getUp = (x, y) => {
    if (y === 0) {
        return {x: x, y: y}
    }

    return {x: x, y: y - 1}
}

const getDown = (x, y) => {
    if (y === size.rows - 1) {
        return {x: x, y: y}
    }

    return {x: x, y: y + 1}
}

const getLeft = (x, y) => {
    if (x === 0) {
        return {x: x, y: y}
    }

    return {x: x - 1, y: y}
}

const getRight = (x, y) => {
    if (x === size.cols - 1) {
        return {x: x, y: y}
    }

    return {x: x + 1, y: y}
}

const getZeroNeighbourPosition = (x, y) => {
    const up = getUp(x, y);
    const down = getDown(x, y);
    const left = getLeft(x, y);
    const right = getRight(x, y);

    if (values[up.x][up.y] === 0) {
        return up;
    }

    if (values[down.x][down.y] === 0) {
        return down;
    }

    if (values[left.x][left.y] === 0) {
        return left;
    }

    if (values[right.x][right.y] === 0) {
        return right;
    }
}

const swap = (currentPosition, positionToSwap) => {
    const value = values[currentPosition.x][currentPosition.y];
    values[currentPosition.x][currentPosition.y] = 0;
    values[positionToSwap.x][positionToSwap.y] = value;
}

const changePosition = (x, y) => {
    const value = values[x][y];

    if (value === 0) {
        return;
    }

    const position = getZeroNeighbourPosition(x, y);

    if (position) {
        swap({x: x, y: y}, position);
        draw();
    }
}

createTable(size.cols, size.rows)
