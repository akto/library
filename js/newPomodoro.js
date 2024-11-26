/* NOT COMPLETE CODE */
class Timer {
  constructor(callback, interval) {
    this.callback = callback;
    this.interval = interval;
    this.timerId = null;
    this.isPaused = false;
  }
  start() {
    if (!this.timerId) {
      this.timerId = setInterval(this.callback, this.interval);
    }
  }
  pause() {
    if (this.timerId && !this.isPaused) {
      clearInterval(this.timerId);
      this.isPaused = true;
    }
  }
  resume() {
    if (this.isPaused) {
      this.timerId = setInterval(this.callback, this.interval);
      this.isPaused = false;
    }
  }
  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
      this.isPaused = false;
    }
  }
}

const pomodoro = {
  status : "session",
  countdown  : 1200,
  isPaused : false,
  setCountdown : function( countSeconds ){ this.countdown = countSeconds*60;},
  getCountdown : function(){ return this.countdown; },
  toggleStatus : function(){this.status = ({session:"breaking", breaking:"session"})[this.status]},
  formatTime : function(seconds){
    var minutes = Math.floor(seconds / 60);
    var secs = seconds % 60;
    console.log((minutes < 10 ? '0' : '') + minutes + ':' + (secs < 10 ? '0' : '') + secs);
  },
  start : function(){
    var self = this;
    this.setCountdown(2);
    let counter = this.getCountdown();
    console.log(counter);
      const newTimer = new Timer(() => {
        this.formatTime(counter); // Replace with your desired callback function
        counter--;
      }, 1000);
      newTimer.start();
      if(!this.isPaused){
        if( this.countdown == 0 ){
          console.log("There will be notifications");
          this.toggleStatus();
          newTimer.start();
        }
      }
  }
}

function formatTime(seconds){
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    console.log((minutes < 10 ? '0' : '') + minutes + ':' + (secs < 10 ? '0' : '') + secs);
  }
pomodoro.start();
