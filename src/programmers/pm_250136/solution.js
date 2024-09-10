"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function solution(land) {
    var maxWidth = land[0].length;
    var maxHeight = land.length;
    var oilBlocks = [];
    var bfs = function (x, y) {
        var _a;
        var dir = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];
        var queue = [];
        queue.push({ x: x, y: y });
        while (queue.length > 0) {
            var pos = (_a = queue.pop()) !== null && _a !== void 0 ? _a : { x: -1, y: -1 };
            // 마킹
            land[pos.y][pos.x] = 0;
            size++;
            if (cols.indexOf(pos.x) < 0)
                cols.push(pos.x);
            for (var index = 0; index < dir.length; index++) {
                // 범위 밖
                var nextX = pos.x + dir[index][0];
                var nextY = pos.y + dir[index][1];
                if (nextX < 0 || nextX >= maxWidth || nextY < 0 || nextY >= maxHeight)
                    continue;
                if (land[nextY][nextX] == 0)
                    continue;
                land[nextY][nextX] = 0;
                queue.push({ x: nextX, y: nextY });
            }
        }
    };
    var size = 0;
    var cols = [];
    land.forEach(function (a, y) {
        a.forEach(function (b, x) {
            if (b == 1) {
                size = 0;
                cols = [];
                bfs(x, y);
                oilBlocks.push({ size: size, cols: cols });
            }
        });
    });
    var result = 0;
    if (oilBlocks.length > 0) {
        var _loop_1 = function (loop) {
            var sum = oilBlocks
                .filter(function (d) { return d.cols.indexOf(loop) >= 0; })
                .map(function (d) { return d.size; })
                .reduce(function (sum, a) { return sum + a; }, 0);
            if (result < sum)
                result = sum;
        };
        for (var loop = 0; loop < maxWidth; loop++) {
            _loop_1(loop);
        }
    }
    return result;
}
