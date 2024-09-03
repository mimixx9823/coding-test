import { TestCaseClass } from "../../type/test-case-type";

const testCase = new TestCaseClass<string[][], string[]>(
  [
    [
      ["korean", "11:40", "30"],
      ["english", "12:10", "20"],
      ["math", "12:30", "40"],
    ],
    ["korean", "english", "math"],
  ],
  [
    [
      ["science", "12:40", "50"],
      ["music", "12:20", "40"],
      ["history", "14:00", "30"],
      ["computer", "12:30", "100"],
    ],
    ["science", "history", "computer", "music"],
  ],
  [
    [
      ["aaa", "12:00", "20"],
      ["bbb", "12:10", "30"],
      ["ccc", "12:40", "10"],
    ],
    ["bbb", "ccc", "aaa"],
  ]
);
export default testCase;
