var Pomodoro = {
	intervalID : 0,
	countdown : 0,
	sessionTime : 1200, //Default Session Time
	breakTime : 300, //Default Break Time
	status : "session", // @param session or break 
	on: false,
	setSessionTime : function( sTime ){ this.sessionTime = sTime*60; },
	setBreakTime : function( bTime ){ this.breakTime = bTime*60; },
	getSessionTime : function () { return this.sessionTime; },
	getBreakTime : function(){ return this.breakTime; },
	setCountdown : function(){
		this.countdown = this.status == "session" ? this.getSessionTime() : this.getBreakTime();
	},
	changeState : function(){
		this.status == "session" ? this.status = "break" : this.status = "session";
	},
	playAudio : function(){
		var audio = new Audio('https://proxy.notificationsounds.com/message-tones/to-the-point-568/download/file-sounds-1111-to-the-point.ogg');
		audio.play();
	},
	start : function(){ 
		this.stop();
		this.setCountdown();
		this.intervalID = setInterval( 
			function(){
				if( Pomodoro.on ){
					console.log(Pomodoro.countdown);
					if(Pomodoro.countdown == 0){
						Pomodoro.playAudio();
						Pomodoro.changeState();
						Pomodoro.start();
					}
					Pomodoro.countdown--;
				}
			} ,1000 );  
	},
	stop : function(){ clearInterval( this.intervalID ); }
}

//test
Pomodoro.on = true;
Pomodoro.setSessionTime(1);
Pomodoro.start();

//if add Pomodoro.on = false in progress it will pause.