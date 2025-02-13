//Insertion Sorting
//Time complexity Best case: O(n) Worst Case: O(n^2) Space complexity: O(1)
const insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;

    while (j >= 0 && arr[j + 1] < arr[j]) {
      let tmp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = tmp;
      j--;
    }
  }
  return arr;
};

const messedArr = [2, 8, 11, 6, 9, 1, 5, 17];

console.log("Ordered Array:", insertion(messedArr));
