export type Input = {
  cap: number;
  n: number;
  deliveries: number[];
  pickups: number[];
};
export function solution(input: Input): number {
  const { cap, n, deliveries, pickups } = input;
  let dSum = deliveries.reduce((sum, a) => (sum += a));
  let pSum = pickups.reduce((sum, a) => (sum += a));

  let move = 0;
  while (dSum > 0 || pSum > 0) {
    removeZero(deliveries);
    removeZero(pickups);

    move += Math.max(deliveries.length, pickups.length) * 2;

    dSum -= work(deliveries, cap);
    pSum -= work(pickups, cap);
  }

  return move;
}

function removeZero(arr: number[]) {
  while (arr[arr.length - 1] == 0) {
    arr.pop();
  }
}

function work(arr: number[], max: number): number {
  let cap = max;
  let sum = 0;
  for (let idx = arr.length - 1; idx >= 0; idx--) {
    let target = arr[idx];
    if (target > 0) {
      if (target >= cap) {
        sum += cap;
        arr[idx] -= cap;
        cap = 0;
        break;
      } else {
        cap -= target;
        sum += target;
        arr[idx] = 0;
      }
    }
  }
  return sum;
}
