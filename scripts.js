/**/function err() {
  return true;
}
window.onerror = err;

function addEvent(elm, evType, fn, useCapture) {
	if (elm.addEventListener) {
		elm.addEventListener(evType, fn, useCapture);
		return true;
	}
	else if (elm.attachEvent) {
		var r = elm.attachEvent('on' + evType, fn);
		return r;
	}
	else {
		elm['on' + evType] = fn;
	}
} //addEvent(window,'load',funcName,false);


/* var scheme = location.href.split("?"); // create 2 part array where post-? is [1];
document.write("<link href=\"" + scheme[1] + ".css\" rel=\"stylesheet\" type=\"text/css\">");*/

function pn(x)	{ // AUTO PREV-NEXT
	var pages = new Array('index2','why','gisha','byage','hadracha','siyur0','musa','tanks','zikaron','meizag','taruhot','nofim','xtras','ech','contact','undefined');
	var a=location.href.split("/schools/"); a=a[1].split(".htm"); var pgnm=a[0];  // get current page name
	if (pgnm=="") pgnm="index2";
	for(l=0;l<pages.length;l++) {		// loop through "pages" array for current page name
		if (pages[l] == pgnm) {var prev=pages[l-1]+".htm"; var next=pages[l+1]+".htm"}
	}
	if(x=="p") location.href=prev; else location.href=next;		//redirect
	} // END AUTO PREV-NEXT
function pass(u)	{ // used to pass prefered stylsheet from one page to next
	var color = location.href.split("?");
	if (color[1]) {location.href=u + "?" + color[1];} else {location.href=u;}
}

function zum(zm)	{
	z1.style.zoom=zm; z2.style.zoom=zm; z3.style.zoom=zm; z4.style.zoom=zm;
}

function skrol() {
	document.body.style.scrollbarFaceColor="#000";
	document.body.style.scrollbarArrowColor="#666";
	document.body.style.scrollbarTrackColor="#404040";
	document.body.style.scrollbarShadowColor="#333";
	document.body.style.scrollbarDarkshadowColor="#666";
	document.body.style.scrollbarHighlightColor="#666";
	document.body.style.scrollbar3dLightColor="#333";
}

document.oncontextmenu=new Function("return false");

document.onkeyup = function(event) {
	evt = event || window.event;
	el = evt.srcElement || evt.target;
	if (el.name)
		return true;

	switch (evt.keyCode) {
		case 37 : pn('n'); return false; break;		// left arrow key
		case 39 : history.back(); return false; break;		// right arrow key
//		case 13 : alert(); return false; break;		// enter key		
	}
	return true;
}

function printit(x) {
	document.body.style.cursor='wait';
	if(document.getElementById('print')) document.getElementById('print').style.cursor='wait';
	if(x==2) {document.getElementById('submit').style.cursor='wait'; document.getElementById('submit').disabled=true;}
	window.print();
	window.setTimeout("document.getElementById('print').style.cursor=''; document.body.style.cursor='';",4000);
	if(x==2) {window.setTimeout("document.getElementById('submit').style.cursor='';",4000); window.setTimeout("document.getElementById('submit').disabled=false;",6000);}
}

function full() {
	document.getElementById("part").style.display="none";
	document.getElementById("full").style.display="block";
}

function order() {
	if(location.search=="?o") history.back(); else location.href="undefined.htm";
}

function loadqs() {
	if(top.location.href.indexOf("order")!=-1) {
		var qs=top.location.search.split("?&")[1].split("&"); // array
		for(i=0;i<qs.length;i++) {
			if(qs[i].indexOf("order")!=-1) document.getElementById("which").value=qs[i].split("=")[1];
				else if(qs[i].indexOf("total")!=-1) document.getElementById("what_time").value=qs[i].split("=")[1];
				else document.getElementById("what").value += qs[i] + ", "; //qs[i].split("=")[0]
		}
	}
}