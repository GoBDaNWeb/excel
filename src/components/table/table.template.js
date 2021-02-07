const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `
        <div class="cell" contenteditable>         
        </div>
    `
}

function toColumn(col) {
    return `
        <div class="column">
            ${col}
        </div>
    `
}

function createRow(content, number) {
    return `
        <div class="row">
            <div class="row-info">${number}</div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

function cols(colsCount) {
    return new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')
}

function cell(colsCount) {
    return new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
}

export function createTable(rowsCount = 30) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    rows.push(createRow(cols(colsCount), ''))

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(cell(colsCount), i + 1))
    }

    return rows.join('')
}
