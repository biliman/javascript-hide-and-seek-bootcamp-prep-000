function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let arr = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i] + n;
  }
  return arr;
}