import { solution } from "./programmers/pm_176962/pm-176962";
import testCase from "./programmers/pm_176962/test-cases";

describe("group", () => {
  let index = 0;
  testCase.testCases.forEach((d) => {
    test("test" + ++index, () => {
      expect(solution(d.testcase)).toBe(d.res);
    });
  });
});
