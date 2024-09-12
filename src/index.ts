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
    const solutionModule = await import(`./programmers/pm_${testId}/solution`);
    const testCaseModule = await import(
      `./programmers/pm_${testId}/test-cases`
    );
    testCaseModule.testCase.testCases.forEach((d: any, i: any) => {
      let check = true;
      if (process.env.case_id && parseInt(process.env.case_id) >= 0) {
        if (i != parseInt(process.env.case_id)) {
          check = false;
        }
      }
      if (check) {
        console.log("\n");
        let testcase = JSON.parse(JSON.stringify(d.testcase));
        const res = solutionModule.solution(d.testcase);
        if (JSON.stringify(res) === JSON.stringify(d.res)) {
          console.log(colorize("Success", 42));
        } else {
          console.log(colorize("Fail", 41));
        }

        console.log("testCase:");
        console.log(testcase);
        console.log("TO-BE:");
        console.log(d.res);
        console.log("AS-IS:");
        console.log(res);
      }
    });
    return solutionModule.solution;
  } catch (error) {
    console.error(`unknown test id: ${testId}`, error);
    throw error;
  }
}
run();
