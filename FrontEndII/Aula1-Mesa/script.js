// let arrayNumber = [1, 2, 3, 4, 5];
// let total = 0;

// arrayNumber.forEach((number) => {
//   total += number;
//   return total;
// });


let total = [1,2,4,8].reduce((item, total) => {
  return item + total
})

document.write(total)
