// On page load
// Load SwaggerJacker library
chrome.tabs.executeScript( tab, { file:'SwaggerJacker.min.js', allFrames:false }, function(){

	// Fetch Tags
	SwaggerJacker.fetchTags ( currentTab.Url );

		// Does page have tags
		if( SwaggerJacker.Tags.length > 0 ){
			
			// Yes
			// Change extension icon
		}

		// If library loaded
		if( typeof ( SwaggerJacker ) == "object" ){
			// Extension Button Click Event 
			chrome.browserAction.onClicked.addListener( function( tab ) {

				// Load jQuery
			    chrome.tabs.executeScript( tab, { file:'jquery.min.js', allFrames:false }, function(){

			    		// Show Tagging Interface
			    		SwaggerJacker.render( currentTab );

			    			// Show Tags
			    			SwaaggerJacker.showTags( currentTab );

			    		// Tagging interface should allow user to:

			    			// Create new Tag
			    });
			});
		}

});