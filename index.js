function knightMoves(start, end) {
  let queue = [];
  queue.push(new Node(start));

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      if (compareArr(queue[i].data, end)) {
        notPrettyPrint(queue[i]);

        queue = [];
        break;
      }
    }
    if (queue.length == 0) {
      break;
    }

    let children = possibleMoves(queue[0].data);
    let nodeArr = makeNodesArr(queue[0], children);
    for (let i = 0; i < nodeArr.length; i++) {
      queue.push(nodeArr[i]);
    }

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

function compareArr(arr1, arr2) {
  let same = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      same = false;
      break;
    } else same = true;
  }
  return same;
}

function makeNodesArr(parent, childrenArr) {
  let nodesArr = [];
  for (let i = 0; i < childrenArr.length; i++) {
    let node = new Node(childrenArr[i], parent);
    nodesArr.push(node);
  }
  return nodesArr;
}
class Node {
  constructor(data, prev = null) {
    this.data = data;
    this.prev = prev;
  }
}

function notPrettyPrint(node) {
  while (node.prev != null) {
    console.log(node.data);
    node = node.prev;
  }
  if (node.prev == null) {
    console.log(node.data);
  }
}
knightMoves([0, 0], [7, 7]);
