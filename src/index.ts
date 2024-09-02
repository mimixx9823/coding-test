import { solution } from "./programmers/pm_176962/pm_176962";

// beakjoon
// let fs = require("fs");
// const bjPath = "/dev/stdin";
// const projectPath = "/Users/dg-2401-pn-006/Work/study/coding-test";
// const devPath = "/src/programmers/pm_176962/input.txt";
// let input = fs
//   .readFileSync(projectPath + devPath)
//   .toString()
//   .split(" ");

// programmers
let input = [
  ["korean", "11:40", "30"],
  ["english", "12:10", "20"],
  ["math", "12:30", "40"],
];

console.log(solution(input));
