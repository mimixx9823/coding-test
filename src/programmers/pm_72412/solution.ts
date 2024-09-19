import { Input } from './test-cases';

const lan = new Map<string, number>();
const dep = new Map<string, number>();
const lev = new Map<string, number>();
const food = new Map<string, number>();

lan.set("-", 0);
lan.set("cpp", 1);
lan.set("java", 2);
lan.set("python", 3);

dep.set("-", 0);
dep.set("backend", 1);
dep.set("frontend", 2);

lev.set("-", 0);
lev.set("junior", 1);
lev.set("senior", 2);

food.set("-", 0);
food.set("chicken", 1);
food.set("pizza", 2);

export function solution(input: Input): number[] {
  let { info, query } = input;

  let map = new Map<string, number[]>();
  let l = [0],
    d = [0],
    v = [0],
    f = [0];
  for (let inf of info) {
    let arr = inf.split(" ");
    l.push(lan.get(arr[0]) ?? 0);
    d.push(dep.get(arr[1]) ?? 0);
    v.push(lev.get(arr[2]) ?? 0);
    f.push(food.get(arr[3]) ?? 0);
    for (let a of l)
      for (let b of d)
        for (let c of v)
          for (let d of f) {
            let str = "" + a + b + c + d;
            if (map.has(str)) {
              map.get(str)?.push(parseInt(arr[4]));
            } else {
              map.set(str, [parseInt(arr[4])]);
            }
          }
    l.pop();
    d.pop();
    v.pop();
    f.pop();
  }

  map.forEach((v) => v.sort((a, b) => a - b));

  return query.map((q) => {
    let sp = q.split(" ");
    let key =
      "" + lan.get(sp[0]) + dep.get(sp[2]) + lev.get(sp[4]) + food.get(sp[6]);
    let score = parseInt(sp[7]);
    let lst = map.get(key) ?? [];

    let left = 0;
    let right = lst.length;
    let mid = 0;
    while (left < right) {
      mid = left + Math.floor((right - left) / 2);
      if (lst[mid] < score) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return lst.length - left;
  });
}
