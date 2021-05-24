
	$().ready(function() {
		var location = window.location.origin;
		var depth = window.location.pathname.split('/').length-2;
		//$("div").text(depth);
		if(!location.includes('0.0')){
			depth--;
		}
		$("footer").text(depth);
		var path = "";
		for(var i = 0; i<depth; i++){
			path += '../';
		}
		path += 'nav.html';
		$('#navi').load(path);
	});