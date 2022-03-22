const groupBy = (arr, func) =>
  arr.map(func).reduce(
    (acc, cur, i) => {
    acc[cur] = [...(acc[cur] || []),
    arr[i]];
    return acc;
  }, {}
  );

// 🎉 { number: [ 1, 3 ], string: [ '2', '4' ] }
console.log(groupBy([1, '2', 3, '4'], (val) => typeof val));

// 🎉 { '1': [ [ 1 ], [ 3 ] ], '2': [ [ 1, 2 ], [ 3, 4 ] ] }
console.log(groupBy([[1], [1, 2], [3], [3, 4]], (val) => val.length));
