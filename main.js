//   ------Porjekt 12  v.01 Delete ----
const removeTask = (e) => {
  //   console.log(e.target.textContent);
  //   e.target.parentNode.remove();
  //   e.target.parentNode.style.textDecoration = 'line-through';

  const index = e.target.dataset.key;
  document.querySelector(`li[data-key="${index}"]`).style.textDecoration = 'line-through';
  e.target.remove();
};

document.querySelectorAll('button[data-key]').forEach((item) => item.addEventListener('click', removeTask));

//   ------Porjekt 12  v.02 Search ----

// // Filter
// const arr = [34, 219, 109, 2093, 12, 10, 29];

// const oddNumbers = arr.filter((number) => number % 2);

// const evenNumber = arr.filter((number) => !(number % 2));

// const numbersBigerThen100 = arr.filter((number) => number > 100);

// // Map
// const people = arr.map((number) => number + 'osób');
// const double = arr.map((number) => number * 2);

// // forEach
// arr.forEach((number, index) => (arr[index] = number * 2));
