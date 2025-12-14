function knightMoves(start, end) {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {}
}

function possibleMoves(start) {
  let arr = [
    [start[0] + 2, start[1] + 1],
    [start[0] + 2, start[1] - 1],
    [start[0] - 2, start[1] + 1],
    [start[0] - 2, start[1] - 1],
    [start[0] + 1, start[1] + 2],
    [start[0] - 1, start[1] + 2],
    [start[0] + 1, start[1] - 2],
    [start[0] - 1, start[1] - 2],
  ];
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > 7 || arr[i][j] < 0) {
        break;
      } else {
        finalArr.push(arr[i]);
        break;
      }
    }
  }
  return finalArr;
}

console.log(possibleMoves([4, 4]));
