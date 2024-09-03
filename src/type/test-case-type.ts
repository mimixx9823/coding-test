export class TestCaseClass<T, V> {
  testCases: TestCase<T, V>[] = [];

  constructor(...args: (readonly [T, V])[]) {
    this.testCases = args.map(([testcase, res]) => ({ testcase, res }));
  }
}

export type TestCase<T, V> = { testcase: T; res: V };
