var athlete = function(name){
	return function(occupation){
		return function(team){
			return function(stats){
				return name + ' is a ' +
				 occupation + ' who plays for ' +
				  team + ' who made ' + stats +
				   ' 3 point field shots last year'
			}
		}
	}
}

var stephCurry = athlete('Steph Curry')('NBA player')('GSW')(324)