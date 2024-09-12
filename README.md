# typescript로 코테 연습용 모듈

<div align=center><h1>📚 Environment</h1></div>
<div align=center>
  VSCODE
  </br>
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
</div>

# 기능

## [TestCase별 실행](#TestCase-실행-방법)

![스크린샷 2024-09-05 오후 5 30 25](https://github.com/user-attachments/assets/f91255c4-cc0b-4698-939c-53511de435f9)

## [Typescript To Javascript 변환 (컴파일)](#javascript-변환-방법)

제출 할 땐 js로 해야해서 변환 기능 추가.
</br>
</br>

# 사용방법

## TestCase 실행 방법

1. `.src/programmers`폴더 안에 `pm_temp` 폴더를 복사해서 폴더명과 파일명의 **temp**를 프로그래머스 문제번호로 대치한다.
   ```
   e.g.)
   ├─ programmers
   │  ├─ pm_176962
   │  │  ├─ solution.ts
   │  │  └─ test-cases.ts
   ```
2. `test-cases.ts`의 TestCaseClass의 제네릭 타입을 테스트케이스와 알맞게 변경 후, 케이스별로 배열로 묶어서 생성.

<div>
  <div>
  <details>
    <summary><b>예시 1</b></summary>

| input   | result |
| :------ | :----- |
| 1 2     | 2      |
| 1 2 3 4 | 4      |

```typescript
export const testCase = new TestCaseClass<number[], number>(
  [[1, 2], 2],
  [[1, 2, 3, 4], 4]
);
```

  </details>
  </div>
  <details>
  <summary><b>예시 2</b></summary>

| plans (string[][])                                                                                               | result (string[])                           |
| :--------------------------------------------------------------------------------------------------------------- | :------------------------------------------ |
| [["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]]                                 | ["korean", "english", "math"]               |
| [["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]] | ["science", "history", "computer", "music"] |
| [["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "12:40", "10"]]                                         | ["bbb", "ccc", "aaa"]                       |

```typescript
export const testCase = new TestCaseClass<string[][], string[]>(
  [
    [
      ["korean", "11:40", "30"],
      ["english", "12:10", "20"],
      ["math", "12:30", "40"],
    ],
    ["korean", "english"],
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
```

  </details>
  <details>
  <summary><b>예시 3(인풋 여러개)</b></summary>

| n   | info                    | result                  |
| :-- | :---------------------- | :---------------------- |
| 5   | [2,1,1,1,0,0,0,0,0,0,0] | [0,2,2,0,1,0,0,0,0,0,0] |
| 1   | [1,0,0,0,0,0,0,0,0,0,0] | [-1]                    |
| 9   | [0,0,1,2,0,1,1,1,1,1,1] | [1,1,2,0,1,2,2,0,0,0,0] |
| 10  | [0,0,0,0,0,0,0,0,3,4,3] | [1,1,1,1,1,1,1,1,0,0,2] |

```typescript
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
```

  </details>
</div>

3. solution.ts 에 solution()구현 후 .env 파일 설정
   ```
   //.env
   test_id="176962"
   case_id="-1" // default = -1, 0이상 값 입력 시 해당 케이스만 테스트
   ```
4. vscode Run&Debug `[Test_ID] Run All TestCases` 설정 후 실행 or [F5]키
   ![스크린샷 2024-09-05 오후 5 27 41](https://github.com/user-attachments/assets/632a693b-1876-4c67-b839-b617a64d580f)

5. vscode 내부 터미널 확인 시 다음과 같이 케이스 별 성공/실패 결과 출력 (TO-BE: 정답, AS-IS: 내 로직 결과)

## javascript 변환 방법

⌘ + [shift] + P 로 명령어 팔레트 열어서 `Tasks: Run Build Task` 실행, 문제 번호 입력.
![스크린샷 2024-09-05 오후 5 35 44](https://github.com/user-attachments/assets/72904c51-e7a4-4750-be0a-9793aea63c49)

# 추가 예정 기능

- [ ] beakjoon용 기능 추가
