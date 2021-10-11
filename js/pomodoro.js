const POMODORO = {
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
		/*
			Another Method to check if callback is a function is,
			({}.toString.call(callback) === "[object Function]")
			but this one is slower than typeof(callback) in Chrome. But in firefox, typeof is slower one.
		*/ 
		if(typeof(callback) === "function"){
			this.intervalID = setInterval( function(  ){
				if( POMODORO.on ){
					if(POMODORO.countdown == 0){
						//POMODORO.playAudio();
						console.log("There will be a notification sound in here!");
						POMODORO.changeState();
						POMODORO.start( callback );
					}
					callback( POMODORO.countdown );
					POMODORO.countdown--;
				}
			} ,1000 );
		}  
	},
	stop : function(){ clearInterval( this.intervalID ); },
	pause : function(){ this.on == false ? this.on = true: this.on = false; },
	reset : function(){
		this.stop(); 
		this.setSessionTime(this.sessionTime); 
		this.setBreakTime(this.breakTime);
	}
}
function timeInHMS( seconds ){
	var h = Math.floor( seconds / 3600 ),
		m = Math.floor((seconds % 3600) / 60),
		s = Math.floor((seconds % 3600) % 60);
	return (( h < 0 ? '00' : ( h < 10  ? '0' + h : h))+':'+( m < 0 ? '00' : ( m < 10  ? '0' + m : m))+':'+( s < 0 ? '00' : ( s < 10  ? '0' + s : s)));
}
//test
function showTimer( i ){
	console.log( timeInHMS( i ) );
}
POMODORO.on = true;
POMODORO.setSessionTime(0.3);
POMODORO.setBreakTime(0.1);
POMODORO.start( showTimer );


/* 
for resetting and starting over
Pomodoro.reset();
Pomodoro.pause(); --> for interchanging Pomodoro.on state.
Pomodoro.start();
Maybe I can interchange the state of pause() method inside start() method but not sure if it's good to do this in start() method
*/