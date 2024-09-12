"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function solution(input) {
    var cap = input.cap, n = input.n, deliveries = input.deliveries, pickups = input.pickups;
    var dSum = deliveries.reduce(function (sum, a) { return (sum += a); });
    var pSum = pickups.reduce(function (sum, a) { return (sum += a); });
    var move = 0;
    while (dSum > 0 || pSum > 0) {
        removeZero(deliveries);
        removeZero(pickups);
        move += Math.max(deliveries.length, pickups.length) * 2;
        dSum -= work(deliveries, cap);
        pSum -= work(pickups, cap);
    }
    return move;
}
function removeZero(arr) {
    while (arr[arr.length - 1] == 0) {
        arr.pop();
    }
}
function work(arr, max) {
    var cap = max;
    var sum = 0;
    for (var idx = arr.length - 1; idx >= 0; idx--) {
        var target = arr[idx];
        if (target > 0) {
            if (target >= cap) {
                sum += cap;
                arr[idx] -= cap;
                cap = 0;
                break;
            }
            else {
                cap -= target;
                sum += target;
                arr[idx] = 0;
            }
        }
    }
    return sum;
}
