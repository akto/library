const pomodoro = {
  status : "session",
  toggleStatus : function(){ 
      this.status = ({session:"breaking", breaking:"session"})[this.status]
  }
}

/* AI Solution for toggling around states */
const toggleStatus = status => ({ Option1: 'Option2', Option2: 'Option1' })[status];
