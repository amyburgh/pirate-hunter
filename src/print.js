export default function print(board){
  let s = ''
  const arr = board.map

  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      if (!arr[x][y] && !board.isMiss({x, y})) s += '▢ '
      else if (!arr[x][y] && board.isMiss({x, y})) s+= '⚪'
      else if (!arr[x][y].isHit({x, y})) s+= '▧ '
      else if (arr[x][y].isHit({x, y})) s+= '🔴'
    }
    if (x < arr.length - 1) s+= `\n`
  }
  return s
}

