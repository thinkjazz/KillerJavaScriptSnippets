const formatMoney = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// 🎉 '20,220,316'
console.log(formatMoney(20220316));