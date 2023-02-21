class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (callback === undefined || !time) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        this.alarmCollection.push({callback, time, canCall: true})
    }

    removeClock(time) {
        return this.alarmCollection = this.alarmCollection.filter(el => el.time !== time)
    }

    getCurrentFormattedTime() {
        const date = new Date();
        let hours = date.getHours();
        if (hours < 10) {
            hours = "0" + hours
        };
        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes
        };
        return `${hours}:${minutes}`;
    }
    start() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(el => {
                    if (el.time === this.getCurrentFormattedTime() && el.canCall) {
                        el.canCall = false;
                        el.callback();
                    }
                }
                )
            }, 1000)
        }
        return
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach(el => el.canCall = true)
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}