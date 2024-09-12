export function solution(input: number[][]): string[] {
  const count = input.length;
  let start = 0;
  let posList = new Set<number[]>();
  while (start < count - 1) {
    let [a, b, e] = input[start];
    for (let loop = start + 1; loop < input.length; loop++) {
      let [c, d, f] = input[loop];
      if (a * d - b * c != 0) {
        if ((b * f - e * d) % (a * d - b * c) != 0) continue;
        if ((e * c - a * f) % (a * d - b * c) != 0) continue;
        posList.add([
          (b * f - e * d) / (a * d - b * c),
          (e * c - a * f) / (a * d - b * c),
        ]);
      }
    }
    start++;
  }

  let [minX, maxX, minY, maxY]: number[] = [
    Number.MAX_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
  ];
  posList.forEach((pos) => {
    minX = Math.min(minX, pos[0]);
    maxX = Math.max(maxX, pos[0]);
    minY = Math.min(minY, pos[1]);
    maxY = Math.max(maxY, pos[1]);
  });

  let arr: boolean[][] = [];
  let height = maxY - minY + 1;
  let width = maxX - minX + 1;
  // arr = Array.from({ length: height }, () => Array(width).fill(false));
  arr = Array(height)
    .fill([])
    .map((d) => (d = Array(width).fill(false)));

  posList.forEach((pos) => {
    let x = pos[0] - (minX as number);
    let y = (maxY as number) - pos[1];
    arr[y][x] = true;
  });

  let result = arr.map((d) => d.map((b) => (b ? "*" : ".")).join(""));
  return result;
}
