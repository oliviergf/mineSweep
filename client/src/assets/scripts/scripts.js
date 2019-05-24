export function generateBoard(x, y) {
  const tile = { state: 'hidden', content: '' }
  const generateRow = () =>
    Array(x)
      .fill()
      .map(() => ({ ...tile }))

  const board = Array(y)
    .fill()
    .map(generateRow)

  const mineNum = parseInt(x * y * 0.1)
  const minedBoard = generateMines(board, mineNum)
  const numberedMinedBoard = generateNumberTiles(minedBoard)
  return numberedMinedBoard
}

function generateMines(board, minesToPlant) {
  const colLength = board.length
  const rowLength = board[0].length

  let minesPlanted = 0

  while (minesPlanted < minesToPlant) {
    const y = getRandom(colLength)
    const x = getRandom(rowLength)

    const tile = board[y][x]
    if (tile.content !== 'B') {
      tile.content = 'B'
      minesPlanted += 1
    }
  }

  return board
}

function generateNumberTiles(board) {
  const countBombs = (x, y) => {
    let bombs = 0

    // Top
    if (board[y - 1] && board[y - 1][x] && board[y - 1][x].content === 'B') bombs += 1
    // Top Right
    if (board[y - 1] && board[y - 1][x + 1] && board[y - 1][x + 1].content === 'B') bombs += 1
    // Right
    if (board[y] && board[y][x + 1] && board[y][x + 1].content === 'B') bombs += 1
    // Bottom Right
    if (board[y + 1] && board[y + 1][x + 1] && board[y + 1][x + 1].content === 'B') bombs += 1
    // Bottom
    if (board[y + 1] && board[y + 1][x] && board[y + 1][x].content === 'B') bombs += 1
    // Bottom Left
    if (board[y + 1] && board[y + 1][x - 1] && board[y + 1][x - 1].content === 'B') bombs += 1
    // Left
    if (board[y] && board[y][x - 1] && board[y][x - 1].content === 'B') bombs += 1
    // Top Left
    if (board[y - 1] && board[y - 1][x - 1] && board[y - 1][x - 1].content === 'B') bombs += 1
    return String(bombs || '')
  }

  board.forEach((row, y) => {
    row.forEach((tile, x) => {
      if (tile.content !== '') return
      const bombsAround = countBombs(x, y)
      tile.content = bombsAround
    })
  })

  return board
}

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

// export function clickTile(board, x, y) {
//   const tile = board[(y, x)]
//   if (tile.state === 'hidden') {
//     tile.state = 'revealed'
//     if (tile.content === 'B') {
//       // gameOver()
//     } else if (tile.content === '') {
//       traverseReveal(board, x, y)
//     }
//   }
// }

export function traverseReveal(board, x, y) {
  const toTraverseArr = []
  toTraverseArr.push(...getEmptyHiddenNeighbors(board, x, y))

  while (toTraverseArr.length) {
    const tileCoord = toTraverseArr.shift()
    board[tileCoord.y][tileCoord.x].state = 'revealed'
    const newEmptyHiddenNeighbors = getEmptyHiddenNeighbors(board, tileCoord.x, tileCoord.y)
    toTraverseArr.push(...newEmptyHiddenNeighbors)
  }
}

function getEmptyHiddenNeighbors(board, x, y) {
  const emptyHiddenNeighbors = []
  // Top
  if (board[y - 1] && board[y - 1][x] && board[y - 1][x].content === '' && board[y - 1][x].state === 'hidden') emptyHiddenNeighbors.push({ x, y: y - 1 })
  // Top Right
  if (board[y - 1] && board[y - 1][x + 1] && board[y - 1][x + 1].content === '' && board[y - 1][x + 1].state === 'hidden')
    emptyHiddenNeighbors.push({ x: x + 1, y: y - 1 })
  // Right
  if (board[y] && board[y][x + 1] && board[y][x + 1].content === '' && board[y][x + 1].state === 'hidden') emptyHiddenNeighbors.push({ x: x + 1, y })
  // Bottom Right
  if (board[y + 1] && board[y + 1][x + 1] && board[y + 1][x + 1].content === '' && board[y + 1][x + 1].state === 'hidden')
    emptyHiddenNeighbors.push({ x: x + 1, y: y + 1 })
  // Bottom
  if (board[y + 1] && board[y + 1][x] && board[y + 1][x].content === '' && board[y + 1][x].state === 'hidden') emptyHiddenNeighbors.push({ x, y: y + 1 })
  // Bottom Left
  if (board[y + 1] && board[y + 1][x - 1] && board[y + 1][x - 1].content === '' && board[y + 1][x - 1].state === 'hidden')
    emptyHiddenNeighbors.push({ x: x - 1, y: y + 1 })
  // Left
  if (board[y] && board[y][x - 1] && board[y][x - 1].content === '' && board[y][x - 1].state === 'hidden') emptyHiddenNeighbors.push({ x: x - 1, y })
  // Top Left
  if (board[y - 1] && board[y - 1][x - 1] && board[y - 1][x - 1].content === '' && board[y - 1][x - 1].state === 'hidden')
    emptyHiddenNeighbors.push({ x: x - 1, y: y - 1 })
  return emptyHiddenNeighbors
}
