
// Tag Object
// Has a score to allow users to vote tag up or down.
// Tags with a score below -x should not be rendered.

var Tag = function( argObj ){
	
	this.url : argObj.url,

	this.img : argObj.img,

	this.coords = {
		x: argObj.x,
		y: argObj.y
	},

	this.score = 0
}