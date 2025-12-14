function knightMoves(start, end) {
  let queue = [];
  queue.push(start);
  let track = [];

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] == end) {
        queue = [];
        return track;
      }
    }
    let children = possibleMoves(queue[0]);
    for (let i = 0; i < children.length; i++) {
      queue.push(children[i]);
    }
    track.push(queue[0]);
    queue.shift();
  }
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
    if (arr[i][0] > 7 || arr[i][0] < 0 || arr[i][1] > 7 || arr[i][1] < 0) {
      continue;
    }
    finalArr.push(arr[i]);
  }

  return finalArr;
}

console.log(possibleMoves([5, 5]));
