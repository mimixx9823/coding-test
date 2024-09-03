"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function solution(plans) {
    var subjects = plans
        .map(function (d) {
        var name = d[0], startTime = d[1], playTime = d[2];
        return {
            name: name,
            startTime: timeStringToDate(startTime).getTimeByMinutes(),
            playTime: parseInt(playTime),
        };
    })
        .sort(function (a, b) { return a.startTime - b.startTime; })
        .reverse();
    var stack = [];
    var finished = [];
    var current = subjects.pop();
    var next = subjects.pop();
    var currentTime = current === null || current === void 0 ? void 0 : current.startTime;
    while (next !== undefined) {
        if (currentTime === undefined || current == undefined)
            break;
        var remainTime = next.startTime - currentTime;
        if (remainTime < current.playTime) {
            // 과제 스택에 넣고 다음과제 시작
            currentTime = next.startTime;
            current.playTime -= remainTime;
            stack.push(current);
            current = next;
            next = subjects.pop();
        }
        else {
            // 과제 완료
            finished.push(current.name);
            if (stack.length > 0) {
                currentTime += current.playTime;
                current = stack.pop();
            }
            else {
                currentTime = next.startTime;
                current = next;
                next = subjects.pop();
            }
        }
    }
    if (current !== undefined)
        finished.push(current.name);
    finished = finished.concat(stack.reverse().map(function (d) { return d.name; }));
    return finished;
}
function timeStringToDate(time) {
    var today = new Date();
    var _a = time.split(":").map(Number), hours = _a[0], minutes = _a[1];
    // 현재 날짜에 시간 설정
    today.setHours(hours, minutes, 0, 0); // 초와 밀리초는 0으로 설정
    return today;
}
Date.prototype.getTimeByMinutes = function () {
    return this.getHours() * 60 + this.getMinutes();
};
