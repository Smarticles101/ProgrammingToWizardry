var dict = [[["programmers", "developers"], "wizards"], 
			[["programmer", "developer"], "wizard"],
			[["code", "software", "script"], "magic"],
			[["source"], "raw"],
			[["bugs", "bug", "errors", "error"], "dark magic"]];

var e = document.getElementsByTagName('*');  // get all elements on the page

for(var i = 0; i<e.length; i++) {
	for(var j = 0; j<e[i].childNodes.length; j++) {
		var n = e[i].childNodes[j];

		if(n.nodeType === 3) {	// node type 3 is a text node
			var text = n.nodeValue;
			var rText = text;

			for(var x = 0; x<dict.length; x++) {
				for(var y = 0; y<dict[x].length-1; y++) {
					for(var z = 0; z<dict[x][y].length; z++) {
						rText = rText.replace(dict[x][y][z], dict[x][dict[x].length-1]);
					}
				}
			}

			if(text !== rText) {
				e[i].replaceChild(document.createTextNode(rText), n);
			}
		}
	}
}