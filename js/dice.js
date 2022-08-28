var dice = {
	diceType : 6,
	roll : function(){return Math.floor( Math.random()*this.diceType + 1 )}
}

dice.roll();