"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function solution(input) {
    var users = input.users, emoticons = input.emoticons;
    var cases = [];
    for (var index = 0; index < arrDiscount.length; index++) {
        dfs(0, [], index, emoticons.length, cases);
    }
    var tempCnt = 0;
    var tempGet = 0;
    cases.forEach(function (d) {
        var cnt = 0;
        var get = 0;
        users.forEach(function (u) {
            var sum = 0;
            var minDis = u[0], maxMoney = u[1];
            emoticons.forEach(function (e, i) {
                if (minDis <= d[i]) {
                    sum += (e * (100 - d[i])) / 100;
                }
            });
            if (sum >= maxMoney) {
                cnt++;
            }
            else {
                get += sum;
            }
        });
        if (tempCnt < cnt || (tempCnt == cnt && tempGet < get)) {
            tempCnt = cnt;
            tempGet = get;
        }
    });
    var answer = [tempCnt, tempGet];
    return answer;
}
var arrDiscount = [10, 20, 30, 40];
function dfs(depth, arr, index, max, cases) {
    var newArr = arr.concat(arrDiscount[index]);
    if (depth + 1 == max) {
        cases.push(newArr);
        return;
    }
    for (var index_1 = 0; index_1 < arrDiscount.length; index_1++) {
        dfs(depth + 1, newArr, index_1, max, cases);
    }
}
