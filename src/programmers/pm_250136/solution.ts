export function solution(land: number[][]): number {
  const maxWidth = land[0].length;
  const maxHeight = land.length;

  let oilBlocks: { size: number; cols: number[] }[] = [];
  let bfs = (x: number, y: number): void => {
    let dir: number[][] = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    let queue: { x: number; y: number }[] = [];

    queue.push({ x, y });
    while (queue.length > 0) {
      let pos: { x: number; y: number } = queue.pop() ?? { x: -1, y: -1 };

      // 마킹
      land[pos.y][pos.x] = 0;
      size++;
      if (cols.indexOf(pos.x) < 0) cols.push(pos.x);

      for (let index = 0; index < dir.length; index++) {
        // 범위 밖
        const nextX = pos.x + dir[index][0];
        const nextY = pos.y + dir[index][1];
        if (nextX < 0 || nextX >= maxWidth || nextY < 0 || nextY >= maxHeight)
          continue;
        if (land[nextY][nextX] == 0) continue;
        land[nextY][nextX] = 0;
        queue.push({ x: nextX, y: nextY });
      }
    }
  };

  let size = 0;
  let cols: number[] = [];
  land.forEach((a, y) => {
    a.forEach((b, x) => {
      if (b == 1) {
        size = 0;
        cols = [];
        bfs(x, y);
        oilBlocks.push({ size, cols });
      }
    });
  });

  let result = 0;
  if (oilBlocks.length > 0) {
    for (let loop = 0; loop < maxWidth; loop++) {
      let sum = oilBlocks
        .filter((d) => d.cols.indexOf(loop) >= 0)
        .map((d) => d.size)
        .reduce((sum, a) => sum + a, 0);
      if (result < sum) result = sum;
    }
  }
  return result;
}
