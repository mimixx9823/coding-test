import { TestCaseClass } from '../../type/test-case-type';

export const testCase = new TestCaseClass<
  { users: number[][]; emoticons: number[] },
  number[]
>(
  [
    {
      users: [
        [40, 10000],
        [25, 10000],
      ],
      emoticons: [7000, 9000],
    },
    [1, 5400],
  ],
  [
    {
      users: [
        [40, 2900],
        [23, 10000],
        [11, 5200],
        [5, 5900],
        [40, 3100],
        [27, 9200],
        [32, 6900],
      ],
      emoticons: [1300, 1500, 1600, 4900],
    },
    [4, 13860],
  ]
);
