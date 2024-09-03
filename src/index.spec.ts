describe("Run TestCases", () => {
  const testId = process.env.test_id;
  let solutionModule: any;
  let testCaseModule: any;

  beforeAll(async () => {
    testCaseModule = await import(`./programmers/pm_${testId}/test-cases`);
  });

  beforeEach(async () => {
    solutionModule = await import(`./programmers/pm_${testId}/pm-${testId}`);
  });

  test("test start", () => {
    testCaseModule.testCase.testCases.forEach((d: any) => {
      expect(solutionModule.solution(d.testcase)).toBe(d.res);
    });
  });
});
