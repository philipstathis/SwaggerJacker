

// Extension Button Click Event
chrome.browserAction.onClicked.addListener( function( tab ) {

	// Load jQuery
    chrome.tabs.executeScript( tab, {file:'jquery.min.js', allFrames:false }, function(){
	    	
    		// Show Tagging Interface
    		// SwaggerJacker.render( currentTab );

    		// Fetch Tags
    		// SwaggerJacker.fetchTags ( currentTab.Url );

    			// Show Tags
    			// SwaaggerJacker.showTags( currentTab );

    		// Tagging interface should allow user to:

    			// Create new Tag
    });
});
