// beakjoon
// let fs = require("fs");
// const bjPath = "/dev/stdin";
// const projectPath = "/Users/dg-2401-pn-006/Work/study/coding-test";
// const devPath = "/src/programmers/pm_176962/input.txt";
// let input = fs
//   .readFileSync(projectPath + devPath)
//   .toString()
//   .split(" ");
import dotenv from 'dotenv';

import { colorize } from './util/log-color';

dotenv.config();
async function run() {
  const testId = process.env.test_id;
  try {
    const solutionModule = await import(
      `./programmers/pm_${testId}/pm-${testId}`
    );
    const testCaseModule = await import(
      `./programmers/pm_${testId}/test-cases`
    );
    testCaseModule.testCase.testCases.forEach((d: any) => {
      console.log("\n");
      const res = solutionModule.solution(d.testcase);
      if (res == d.res) {
        console.log(colorize("Success", 42));
      } else {
        console.log(colorize("Fail", 41));
      }

      console.log("testCase:");
      console.log(d.testcase);

      console.log("result:");
      console.log(res);
    });
    return solutionModule.solution;
  } catch (error) {
    console.error(`unknown test id: ${testId}`, error);
    throw error;
  }
}
run();
