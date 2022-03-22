const randomStringGenerator = (len) => {
  const chars = 'abcdefhijkmnprstwxyz123456789ABCDEFGHJKMNPQRSTWXYZ';
  const generatorLength = chars.length;
  let = randomString = '';

  for (let i = 0; i < len; ++i) {
    randomString += chars.charAt(Math.floor(Math.random() * generatorLength));
}
    return randomString;

}

console.log(randomStringGenerator(6));