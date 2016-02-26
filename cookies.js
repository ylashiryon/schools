function setCookie (name, outputValue, days, evalValue) {
  //Original code:(C) 1998 www.webmonkey.com
  //Modifications: 2001 Tecnorama
  var myValue= outputValue;
  if(evalValue == 1){
	myValue = myValue.value;
  }
  var myDay = new Date();
  myDay.setDate(myDay.getDate() + days);
  document.cookie = name + '=' + myValue + ((days)?(';expires=' + myDay.toGMTString()):'');
}
function readCookie(name, outputElement, defaultText) {
  //Original code:(C) 1998 www.webmonkey.com
  //Modifications: 2001 Tecnorama
  if(document.cookie==''){
	var actualValue;
	actualValue=defaultText;
  }
  if(document.cookie != '') {
	var actualValue, firstChar, lastChar;
	var theBigCookie = document.cookie;
	firstChar = theBigCookie.indexOf(name);
	if(firstChar != -1) {
	  firstChar += name.length + 1;
	  lastChar = theBigCookie.indexOf(';', firstChar);
	  if(lastChar == -1) lastChar = theBigCookie.length;
	  actualValue = theBigCookie.substring(firstChar, lastChar);
	} 
  }
  if(outputElement && actualValue) {
	eval(outputElement+".value = '"+actualValue+"'");
  }
}
function killCookie(name) {
  //Original code:(C) 1998 www.webmonkey.com
  //Modifications: 2001 Tecnorama
  var firstChar, lastChar, theValue;
  var theBigCookie = document.cookie;
  firstChar = theBigCookie.indexOf(name);
  if(firstChar != -1) {
	firstChar += name.length + 1;
	lastChar = theBigCookie.indexOf(';', firstChar);
	if(lastChar == -1) lastChar = theBigCookie.length;
	theValue = theBigCookie.substring(firstChar, lastChar);
  } else {
   theValue = false;
  }
  if(theValue) {
	document.cookie = name + '=' + theValue + '; expires=Fri, 13-Apr-1970 00:00:00 GMT';
  }
}

function cookit(x) {
	if(x.checked==true) setCookie(x.id,x,'',1); else if(x.type=="text" && x.value!="") setCookie(x.id,x,'',1); else if(x.selectedIndex) setCookie(x.id,x,'',1); else killCookie(x.id);
//	document.getElementById('show').innerHTML=document.cookie;
}

function killAll() {
	var tmp=document.cookie.split(";");
	for(i=0;i<tmp.length;i++) {
		var kuki=tmp[i].split("=")[0];
		killCookie(kuki);
	}
	tmp=document.cookie.split("=");
	killCookie(tmp[0]);
}

function repop() {
	var cookies=document.cookie.split(";"); // create cookies array
	if(cookies=="") return false;
	for(var i=0;i<cookies.length;i++) { 	// loop through cookies array
		var tmp=cookies[i].split("=")[0];	// get current cookie name
		var el=eval("document.forms[0]."+tmp);
//			alert("current = " +  el + " (" + tmp + ")");
		if(el) { 							// if element with same name exists
//				if(el.type) alert("type= "+el.type);
			if(el.type=="checkbox") el.checked="true";	
			if(el.length) {					// radio (has length)
				for(var n=0;n<el.length;n++) {
					if(el[n].value==cookies[i].split("=")[1]) el[n].checked="true";
				} // radio for
			} // radio if
			if(el.type=="text") el.value=cookies[i].split("=")[1];
		} // if
	} // for
} //func

