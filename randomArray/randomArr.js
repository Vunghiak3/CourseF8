// Random arrayy
function getRandomItem(a) {
    return a[Math.floor(Math.random(a) * a.length)];
  }
  a = [1, 2, 3, 4, 5, 6];
  console.log(getRandomItem(a));