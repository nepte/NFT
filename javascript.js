function rudr_favorite(a) {
	pageTitle=document.title;
	pageURL=document.location;
	try {
		// Internet Explorer 
		eval("window.external.AddFa-vorite(pageURL, pageTitle)".replace(/-/g,''));
	}
	catch (e) {
		try {
			// Mozilla Firefox
			window.sidebar.addPanel(pageTitle, pageURL, "");
		}
		catch (e) {
			// Opera 
			if (typeof(opera)=="object") {
				a.rel="sidebar";
				a.title=pageTitle;
				a.url=pageURL;
				return true;
			} else {
				// (Chrome, Safari)
				alert('Pressez ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D pour ajouter cette page aux favoris.');
			}
		}
	}
	return false;
}