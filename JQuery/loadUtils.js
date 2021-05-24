
function correctPath(name) {
	var location = window.location.origin;
	var depth = window.location.pathname.split('/').length-2;
	//$("div").text(depth);
	if(!location.includes('0.0')){
		depth--;
	}
	var path = "";
	for(var i = 0; i<depth; i++){
		path += '../';
	}
	return path + name;
};