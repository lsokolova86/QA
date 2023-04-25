//let array = [1, 3, 4];
//let result = 0;
//let sum = array.reduce((acc, currVal, index, array) => acc * currVal + array.indexOf(currVal), 1);
//let array = ['spring', 'summer', 'autumn', 'winter'];
//let array = [[1, 3], [1, 2], [1, 2]];
// let sum = array.reduce((acc, currVal, index, array) => acc + currVal, 0) / array.length;
// let max = array.reduce((acc, el) => acc < el ? acc = el : acc = acc);
// let sum = array.reduce((acc, currVal, index, array) => acc + " " + currVal);
//let sum = array.reduce((acc, currVal, index, array) => acc.concat(currVal), []);
//console.log(sum);
//console.log(max);


const logss = [
    {action: 'A', userId: 1},
    {action: 'A', userId: 1},
    {action: 'A', userId: 2}, // if ABC return userId
    {action: 'A', userId: 3},
    {action: 'A', userId: 1},
    {action: 'B', userId: 1},
    {action: 'B', userId: 1},
    {action: 'B', userId: 2},
    {action: 'B', userId: 3},
    {action: 'A', userId: 3},
    {action: 'C', userId: 3},
    {action: 'C', userId: 2},
    {action: 'C', userId: 1},
    {action: 'B', userId: 1},
    {action: 'C', userId: 1}
  ]

  let abc = {};
  for (let i=0; i<logss.length; i++){
    let userId = logss[i].userId;
  }