function CardFactory() {
	this.findCard=function(cards,race,profession) {
		var list=[];
		if(race=="全部"||race==undefined) race="";
		if(profession=="全部"||profession==undefined) profession="";
		for(var i = 0; i < cards.length; i++) {
			var card = cards[i];
			if(card.race.indexOf(race) != -1&&
			card.profession.indexOf(profession) != -1) {
				list.push(card);
			}
		}
		return list; 
	}
};