const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
};

// 🎉 true
console.log(isValidJSON(JSON.stringify({
  age: 30
})));

// 🎉 false
console.log(isValidJSON('{age:30}'));