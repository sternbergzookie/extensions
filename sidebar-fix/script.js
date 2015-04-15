//* TITLE estufars_sidebar_fix **//
//* VERSION 1.0 REV A **//
//* DESCRIPTION  **//
//* DEVELOPER STUDIOXENIX **//
//* FRAME false **//
//* BETA false **//

XKit.extensions.estufars_sidebar_fix = new Object({

	running: false,

	run: function() {
		this.running = true;
	},

	destroy: function() {
		this.running = false;
	}

});
