import { InputType } from './test-cases';

export function solution(input: InputType): number[] {
  const max = 11;
  let { n, info } = input;
  let aScore: number[] = [];
  info.forEach((d, i) => {
    if (d > 0) {
      aScore.push(10 - i);
    }
  });

  let dfs = (
    depth: number,
    cnt: number,
    as: number[],
    bs: number[],
    cur: number[]
  ) => {
    if (depth == max) {
      let temp = [...cur];
      temp[10] += cnt;
      check(as, bs, temp);
      return;
    }

    const need = info[depth] + 1;
    if (need <= cnt) {
      let arrAs = as.filter((d) => d != 10 - depth);
      let arrBs = bs.concat(10 - depth);
      let temp = [...cur];
      temp[depth] = need;
      dfs(depth + 1, cnt - need, arrAs, arrBs, temp);
    } else if (cnt == 0) {
      check(as, bs, cur);
    }
    dfs(depth + 1, cnt, as, bs, cur);
  };

  let check = (as: number[], bs: number[], arr: number[]) => {
    const diff = sum(bs) - sum(as);
    if (diff > 0)
      if (diff >= resDiff) {
        if (diff == resDiff) {
          for (let index = arr.length - 1; index >= 0; index--) {
            if (arr[index] == result[index]) continue;
            if (arr[index] > result[index]) break;
            if (arr[index] < result[index]) return;
          }
        }
        resDiff = diff;
        result = arr;
      }
  };

  let result: number[] = [-1];
  let resDiff: number = 0;
  dfs(0, n, aScore, [], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  return result;
}

function sum(arr: number[]): number {
  if (arr.length == 0) return 0;
  return arr.reduce((sum, a) => sum + a);
}
