var dice = {
	total : 0,
	diceType : 6,
	userScore : 0,
	computerScore : 0,
	tieScore : 0,
	user : function(){ return Math.floor( Math.random()*this.diceType + 1 ) },
	comp : function(){ return Math.floor( Math.random()*this.diceType + 1 ) },
	result : function(){ 
		this.userlog = this.user();
		this.complog = this.comp();
		this.total++;
		
		if( this.userlog > this.complog ){
			this.userScore++;
			return 2;
		}else if( this.complog > this.userlog ){
			this.computerScore++;
			return 0;
		}else{
			this.tieScore++;
			return 1;
		}
		
		//return this.userlog > this.complog ? 2 : ( this.complog > this.userlog ? 0 : 1 ); 
	},
	reset: function(){
		this.total = 0;
		this.userScore = 0;
		this.computerScore = 0;
		this.tieScore = 0;
	}
};

dice.result();