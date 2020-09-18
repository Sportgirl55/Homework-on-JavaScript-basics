"use strict";

class AlarmClock {
     constructor() {
          this.alarmCollection = [];
          this.timerId = null;
     }

     addClock (time, callback, id) {
          if (!id) {
              throw new Error('Параметр ID не передан'); 
          }
          if(this.alarmCollection.some(obj => obj.id === id)) {
               return console.error('Данный ID уже существует');
          }       
          this.alarmCollection.push ({id, time, callback});
     }

     removeClock(id) {
          if (this.alarmCollection.some(obj => obj.id === id)) {
            this.alarmCollection = this.alarmCollection.filter(obj => obj.id != id);
            return true;
          } else {
            return false;
          }
     }
    
     getCurrentFormattedTime () {
          let currentTime = new Date();
          let minutes = currentTime.getMinutes();
          let hours = currentTime.getHours();
          if (minutes <= 9) {
               minutes = "0" + minutes;
          }
          if (hours <= 9) {
               hours = "0" + hours;
          }
          return (hours + ":" + minutes);
     }

     start () {
          let nowTime = this.getCurrentFormattedTime();
          function checkClock (item) {
               if (item.time === nowTime) {
                    return item.callback();
               } else {
               return false;
               }
          }
          setInterval(() => {
          this.alarmCollection.forEach(item => checkClock(item))
          }, 5000)
     }    

     stop() {
          if(this.timerId) {
              clearInterval(this.timerId);
              this.timerId = null;
          }
     }
     printAlarms () {
          return this.alarmCollection.forEach(obj => console.log(`Будильник №${obj.id} заведён на ${obj.time}`));
     }

     clearAlarms() {
          this.stop();
          this.alarmCollection = [];
     }
}



function testCase () {
     let newAlarmClock = new AlarmClock;
  
     newAlarmClock.addClock ("20:15", () => console.log("Пора вставать!!!"), 1);

     newAlarmClock.addClock ("20:16", () => { 
          console.log("Да вставай ты уже!!!"); 
          this.removeClock(2);
     }, 2);

     try {
          newAlarmClock.addClock ("20:16", console.log("Вставай, засоня!!!"));
     } catch (e) {
          console.log(e);
     }

     newAlarmClock.addClock ("20:17",  () => {
          console.log("Опоздаешь на работу!!Вставааай!");
          this.clearAlarms ();
          this.printAlarms ();
     }, 3);
     newAlarmClock.addClock ("20:20", () => console.log("Пора вставать!!!"), 1);
     newAlarmClock.printAlarms ();
     newAlarmClock.start ();
};

testCase ();
