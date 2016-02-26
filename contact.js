
function allow(field,type) {
	var owk;
	switch(type) {
	 case 1: owk = /[א-ת]|[ ]/i; break;
	 case 2 : owk = /\d/; break;
	 case 3: owk = /[a-z]|[ \-\'\.]/i; break;
	 case 4 : owk = /\d/; break;
 	 case 5 : owk = /\d/; break;
	 default: break;
	}
	var lengt = field.value.length;
	var tchar = field.value.charAt((lengt) - 1);
	if(tchar.search(owk) == -1) {
		var tst = field.value.substring(0, (lengt) - 1);
		field.value = tst;
	}
	if (type==2)  {
	 if (lengt==1) field.value = "(" + field.value;
	 if (lengt==3) if(field.value.charAt(2)!=5 && field.value.charAt(2)!=7) field.value = field.value + ") ";
	 if (lengt==4) if(field.value.charAt(2)==5 || field.value.charAt(2)==7) field.value = field.value + ") ";
	 if (lengt==8) if(field.value.charAt(2)!=5 && field.value.charAt(2)!=7) field.value = field.value + "-";
	 if (lengt==9) if(field.value.charAt(2)==5 || field.value.charAt(2)==7) field.value = field.value + "-";
	}
	if (type==5)  {
	 if (lengt==2) field.value = field.value + "-";
	 if (lengt==5) field.value = field.value + "-20";
	 if (lengt==9) if(field.value.charAt(4)=="-") {var tmp=field.value.charAt(3); var tmp2 = field.value.substr(0,2) + "-0" + tmp + field.value.substr(4,field.value.length); field.value = tmp2;}
	}
}

function know() {
	var tmp=document.getElementById("know").style;
	if(tmp.display=="block") {
		tmp.display="none";
		tmp.background="#FFF6BF";
		document.getElementById("kl").style.background="#FFF6BF";
	} else {
		tmp.display="block";
		tmp.background="lightyellow";
		document.getElementById("kl").style.background="lightyellow";
	}
}

function dateit(x) {
	if(x.value.length>0 && x.value.length<8) {alert('?? ?????? ????? ??? ?????? ##-##-##\t'); x.select();}
}

function contact() {
	var name=document.getElementById("Name");
	var eml=document.getElementById("Email");
	var phon=document.getElementById("Phone");
	var alrt="";
	if(name.value=="") alrt+="* נא להכניס שם.\n";
	if(eml.value=="" && phon.value=="") alrt+="* נא להכיס טלפון ו/או דואל.\n"; else {
		if(eml.value!="" && !/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/.test(eml.value)) alrt+="* נא להכניס כתובת דואל חוקית.\n ";
		if(eml.value=="" && phon.value.length<10) alrt+="* נא להכניס מספר טלפון מלא.\n";
	}
	if(alrt!="") {alrt="לצערנו אין באפשרותנו לשלוח את הטופס מהסיבות הבאות:\t\n\n"+alrt; alert(alrt);} else document.getElementById("ccontact").submit();
}
