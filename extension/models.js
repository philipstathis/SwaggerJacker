
// Tag Object
// Has a score to allow users to vote tag up or down.
// Tags with a score below -x should not be rendered.

var Tag = function( argObj ){

	this.Id: argObj.Id,
	
	this.url : argObj.url,

	this.img : argObj.img,

	this.coords = {
		x: argObj.x,
		y: argObj.y
	},

	this.score = 0
}

// Tag methods
Tag.prototype.render = function(){

}

Tag.prototype.delete = function(){
	// remove tag from interface
}

Tag.prototype.upvote = function(){
	this.score -= 1;
	this.upate();
}

Tag.prototype.downvote = function(){
	this.score += 1;
	this.upate();
}

Tag.prototype.update = function(){

	// post to server
	// only submit id and new score
	$.ajax({
		url: SwaggerJacker.config.updateUrl,
		data: {
			tagId: this.Id,
			score: this.score
		}
	}).done( function( data ){
		// Do stuff after updating score
	} );
}