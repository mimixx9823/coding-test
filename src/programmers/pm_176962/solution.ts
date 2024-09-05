type Subject = { name: string; startTime: number; playTime: number };
export function solution(plans: string[][]): string[] {
  let subjects = plans
    .map((d): Subject => {
      let [name, startTime, playTime] = d;
      return {
        name,
        startTime: timeStringToDate(startTime).getTimeByMinutes(),
        playTime: parseInt(playTime),
      };
    })
    .sort((a, b) => a.startTime - b.startTime)
    .reverse();

  let stack: Subject[] = [];
  let finished: string[] = [];

  let current = subjects.pop();
  let next = subjects.pop();
  let currentTime = current?.startTime;

  while (next !== undefined) {
    if (currentTime === undefined || current == undefined) break;

    const remainTime = next.startTime - currentTime;
    if (remainTime < current.playTime) {
      // 과제 스택에 넣고 다음과제 시작
      currentTime = next.startTime;
      current.playTime -= remainTime;
      stack.push(current);
      current = next;
      next = subjects.pop();
    } else {
      // 과제 완료
      finished.push(current.name);
      if (stack.length > 0) {
        currentTime += current.playTime;
        current = stack.pop();
      } else {
        currentTime = next.startTime;
        current = next;
        next = subjects.pop();
      }
    }
  }

  if (current !== undefined) finished.push(current.name);
  finished = finished.concat(stack.reverse().map((d) => d.name));
  return finished;
}
function timeStringToDate(time: string): Date {
  const today = new Date();
  const [hours, minutes] = time.split(":").map(Number);
  // 현재 날짜에 시간 설정
  today.setHours(hours, minutes, 0, 0); // 초와 밀리초는 0으로 설정

  return today;
}

declare global {
  interface Date {
    getTimeByMinutes: () => number;
  }
}
Date.prototype.getTimeByMinutes = function (): number {
  return this.getHours() * 60 + this.getMinutes();
};
