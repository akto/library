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
	start : function( callback ){ 
		this.stop();
		this.setCountdown();
		this.intervalID = setInterval( function(  ){
			if( Pomodoro.on ){
			//console.log(this.countdown);
				if(Pomodoro.countdown == 0){
					//callback( Pomodoro.countdown );
					Pomodoro.playAudio();
					Pomodoro.changeState();
					Pomodoro.start( callback );
				}
			    callback( Pomodoro.countdown );
			    Pomodoro.countdown--;
		    }
		} ,1000 );  
	},
	stop : function(){ clearInterval( this.intervalID ); },
	pause : function(){ this.on == false ? this.on = true: this.on = false; },
	reset : function(){
		this.pause(); 
		this.stop(); 
		this.setSessionTime(20); 
		this.setBreakTime(5);
	}
}

//test
function basic( i ){
	console.log(i+'. Seconds');
}
Pomodoro.on = true;
Pomodoro.setSessionTime(1);
Pomodoro.start( basic );


/* 
for resetting and starting over
Pomodoro.reset();
Pomodoro.pause(); --> for interchanging Pomodoro.on state.
Pomodoro.start();
Maybe I can interchange the state of pause() method inside start() method but not sure if it's good to do this in start() method
*/