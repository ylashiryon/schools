
function init() {
	//==========================================================================================
	// if supported, initialize TransMenus
	//==========================================================================================
	// Check isSupported() so that menus aren't accidentally sent to non-supporting browsers.
	// This is better than server-side checking because it will also catch browsers which would
	// normally support the menus but have javascript disabled.
	//
	// If supported, call initialize() and then hook whatever image rollover code you need to do
	// to the .onactivate and .ondeactivate events for each menu.
	//==========================================================================================
	if (TransMenu.isSupported()) {
		TransMenu.initialize();

		// hook all the highlight swapping of the main toolbar to menu activation/deactivation
		// instead of simple rollover to get the effect where the button stays hightlit until
		// the menu is closed.
		menu1.onactivate = function() { document.getElementById("tafrit").className = "hover"; };
		menu1.ondeactivate = function() { document.getElementById("tafrit").className = ""; };
//		menu1.ondeactivate = function() { document.getElementById("amenu").className="mnu";};
//		menu1.ondeactivate = function() { document.getElementById("amenu").className="off";};
	}
}


