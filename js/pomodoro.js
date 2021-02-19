var Pomodoro = {
	intervalID : 0,
	tictoc : 0,
	sessionTime : 20, //Default Session Time
	breakTime : 5, //Default Break Time
	status : "session", // @param session or break 
	on: false,
	setSessionTime : function( sTime ){ this.sessionTime = sTime*60; },
	setBreakTime : function( bTime ){ this.breakTime = bTime*60; },
	getSessionTime : function () { return this.sessionTime; },
	getBreakTime : function(){ return this.breakTime; },
	changeState : function(){
		this.status == "session" ? this.status = "break" : this.status = "session";
	},
	start : function(){ 
		this.stop();
		this.tictoc = this.getSessionTime();
		this.intervalID = setInterval( 
			function(){
			    console.log(Pomodoro.tictoc);
				if(Pomodoro.tictoc == 0){
				    Pomodoro.stop();
				}
				Pomodoro.tictoc--;
			} ,1000 );  
	},
	stop : function(){ clearInterval( this.intervalID ); }
}

//test

Pomodoro.setSessionTime(1);
Pomodoro.start();