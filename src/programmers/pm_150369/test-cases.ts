import { TestCaseClass } from '../../type/test-case-type';
import { Input } from './solution';

export const testCase = new TestCaseClass<Input, number>(
  [{ cap: 4, n: 5, deliveries: [1, 0, 3, 1, 2], pickups: [0, 3, 0, 4, 0] }, 16],
  [
    {
      cap: 2,
      n: 7,
      deliveries: [1, 0, 2, 0, 1, 0, 2],
      pickups: [0, 2, 0, 1, 0, 2, 0],
    },
    30,
  ]
);
