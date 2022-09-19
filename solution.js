console.log("Here is the sum and average");

const argvs = process.argv.slice(2);
const arrOfStr = process.argv.slice(3);

const arrOfNum = arrOfStr.map((item) => Number(item));
console.log(...arrOfNum);

const sum = (...nums) => {
  arrOfStr.forEach((ele) => {
    if (isNaN(ele)) {
      console.log(
        `Sorry, the argument ${ele} is not a number, please try again`
      );
      process.exit();
    }
  });

  let total = nums.reduce((acc, ele) => {
    return parseInt(acc) + parseInt(ele);
  }, 0);
  console.log("sum of the numbers are: " + total);
};

const average = (...nums) => {
  arrOfStr.forEach((ele) => {
    if (isNaN(ele)) {
      console.log(
        `Sorry, the argument ${ele} is not a number, please try again`
      );
      process.exit();
    }
  });

  let avg = nums.reduce((acc, ele) => {
    return parseInt(acc) + parseInt(ele);
  }, 0);
  console.log("Average of the numbers are: " + avg / nums.length);
};

const median = (...nums) => {
  arrOfStr.forEach((ele) => {
    if (isNaN(ele)) {
      console.log(
        `Sorry, the argument ${ele} is not a number, please try again`
      );
      process.exit();
    }
  });
  //   const mid = Math.floor(nums.length / 2),
  //     sortedNums = [...nums].sort((a, b) => a - b);
  //   console.log(sortedNums);
  //   console.log(
  //     nums.length % 2 !== 0
  //       ? sortedNums[mid]
  //       : (sortedNums[mid - 1] + sortedNums[mid]) / 2
  //   );
  const sortedNum = [...nums].sort((a, b) => a - b);
  const lastIndex = sortedNum.length - 1;
  const midNum = lastIndex / 2;
  if (midNum % 1 === 0) {
    let numFloor = Math.floor(midNum);
    console.log(sortedNum[numFloor]);
  } else {
    let numFloor = Math.floor(midNum);
    let numCeil = Math.ceil(midNum);
    console.log((sortedNum[numFloor] + sortedNum[numCeil]) / 2);
  }
};

// switch (argvs[0]) {
//   case "sum":
//     sum(...arrOfNum);
//     break;
//   case "avg":
//     average(...arrOfNum);
//     break;
//   case "med":
//     median(...arrOfNum);
//     break;
//   default:
//     console.log(
//       "I cannot calculate that, please type either sum (to calculate the sum) or avg (To calculate the Average)"
//     );
//     break;
// }

if (argvs[0] === "sum") {
  return "sum of the numbers are: " + sum(...arrOfNum);
} else if (argvs[0] === "avg") {
  return average(...arrOfNum);
} else if (argvs[0] === "med") {
  return median(...arrOfNum);
} else if (argvs[0] !== "sum" || "avg") {
  console.log(
    "I cannot calculate that, please type either sum (to calculate the sum) or avg (To calculate the Average)"
  );
}
