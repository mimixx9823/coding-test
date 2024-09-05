import { TestCaseClass } from '../../type/test-case-type';

export type InputType = { n: number; info: number[] };
export const testCase = new TestCaseClass<InputType, number[]>(
  [
    { n: 5, info: [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
    [0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0],
  ],
  [{ n: 1, info: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }, [-1]],
  [
    { n: 9, info: [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1] },
    [1, 1, 2, 0, 1, 2, 2, 0, 0, 0, 0],
  ],
  [
    { n: 10, info: [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3] },
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2],
  ]
);
