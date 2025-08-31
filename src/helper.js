function genRandNums(n) {
  let randNums = new Array(n);
  for (let i = 0; i < n; i++) {
    randNums[i] = Math.floor(Math.random() * 10);
  }

  return randNums;
}

function findSum(nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

function isEven(nums){
    let sum = findSum(nums);
    return sum % 2 === 0;
}

export { genRandNums, isEven };
