function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let arr = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < arr.length; i++) {
    arr[i].innerHTML = +arr[i].innerHTML + n;
  }
  return arr;
}

function deepestChild() {
  let arr = document.querySelector('#grand-node div');
  return arr[arr.length - 1];
}