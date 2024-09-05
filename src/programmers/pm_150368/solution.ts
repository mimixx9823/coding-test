export function solution(input: {
  users: number[][];
  emoticons: number[];
}): number[] {
  let { users, emoticons } = input;
  let cases: number[][] = [];
  for (let index = 0; index < arrDiscount.length; index++) {
    dfs(0, [], index, emoticons.length, cases);
  }

  let tempCnt = 0;
  let tempGet = 0;
  cases.forEach((d) => {
    let cnt = 0;
    let get = 0;
    users.forEach((u) => {
      let sum = 0;
      let [minDis, maxMoney] = u;
      emoticons.forEach((e, i) => {
        if (minDis <= d[i]) {
          sum += (e * (100 - d[i])) / 100;
        }
      });
      if (sum >= maxMoney) {
        cnt++;
      } else {
        get += sum;
      }
    });
    if (tempCnt < cnt || (tempCnt == cnt && tempGet < get)) {
      tempCnt = cnt;
      tempGet = get;
    }
  });

  let answer: number[] = [tempCnt, tempGet];
  return answer;
}

const arrDiscount = [10, 20, 30, 40];
function dfs(
  depth: number,
  arr: number[],
  index: number,
  max: number,
  cases: number[][]
) {
  let newArr = arr.concat(arrDiscount[index]);
  if (depth + 1 == max) {
    cases.push(newArr);
    return;
  }
  for (let index = 0; index < arrDiscount.length; index++) {
    dfs(depth + 1, newArr, index, max, cases);
  }
}
