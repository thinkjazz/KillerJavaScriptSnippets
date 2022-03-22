const intersection = (x,y) => {
  const set = new Set(x);
  return [...new Set(y.filter((i)=> set.has(i)))];
};
console.log(intersection([1, 4, 1, 3, 5, 7], [9, 7, 9]));