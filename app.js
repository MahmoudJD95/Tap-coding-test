function missingNum(arr) {
  let nums = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      nums = i;
    }
  }
  console.log(nums);
  return nums;
}

missingNum([3, 0, 1]);
missingNum([9, 6, 4, 2, 3, 5, 7, 0, 1]);
missingNum([0, 1]);
