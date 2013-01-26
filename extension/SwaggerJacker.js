var Swagger_Jacker = {

	config: {

		baseUrl: 'site.com/swaggerjacker/api',

		fetchUrl: 'http://',

		submitUrl: 'http://',
		
		updateUrl: 'http://',
	}

	tags: [],

	render: function( currentTab ){
		console.log( 'Rendering swagger jacker interface.' )
	},

	showTags: function( currentTab){
		console.log( 'Rendering ' + this.tags.length + ' tags.' )
	}
};
