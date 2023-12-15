class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(timeToRun, func) {
    if (timeToRun == undefined || func == undefined) {
        throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.find(item => item.timeToRun === timeToRun)) {
        console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({
        callback: func,
        time: timeToRun,
        canCall: true
    });
  }

  removeClock(timeToRun) {
    this.alarmCollection = this.alarmCollection.filter(item => {
        return item.time !== timeToRun;
    });
  }

  getCurrentFormattedTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId != undefined) {
        return;
    } else {
        this.intervalId = setInterval(() => {
          this.alarmCollection.forEach((item) => {
            if ((this.getCurrentFormattedTime() == item.time) && item.canCall == true) {
              item.canCall = false;
              item.callback();
            }
          });
        }, 5000);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(item => {
        item.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

const alarm = new AlarmClock();
function ringAlarm(num) {
    console.log(`Звонок ${num} прозвенел`);
}
alarm.addClock('11:25', () => ringAlarm('первый звонок'));
// alarm.addClock('11:11', () => ringAlarm('второй звонок'));
// alarm.addClock('15:30', () => ringAlarm('третий звонок'));

console.log('alarm', alarm);
alarm.start();