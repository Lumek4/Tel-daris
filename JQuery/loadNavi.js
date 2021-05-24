
	$().ready(function() {
		var location = window.location.origin;
		var depth = window.location.pathname.split('/').length;
		if(location.includes('0.0')){
			depth--;
		}
		var path = "";
		for(var i = 0; i<depth; i++){
			path += '../';
		}
		path += 'nav.html';
		$('#navi').load(path);
	});