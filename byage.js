
function on()	{
	if (document.forms.f1.siyur.checked==false)	{
		document.forms.f1.siyur.checked=true;	
		}
}

function mum() {
	if (document.forms.f1.tekes.checked==false)	{
			var x = window.confirm("האם את/ה בטוח/ה שאינך רוצה לקיים טקס לזכר חללי השריון ?\t\n * לחץ/י [OK] על מנת לקיים טקס\n * לחץ/י [Cancel] על מנת להמשיך ללא טקס");
			if (x) document.forms.f1.tekes.checked=true;
	}
}

function calc1() {
	var dt=document.getElementById('total');
	dt.value=90;
	var dtks=document.getElementById('tekes');
	if(dtks.checked==true) dt.value=90+parseInt(dtks.value);
	var dopt2=document.getElementById('opt2');
	var dopt3=document.getElementById('opt3');
	var fopt1=document.forms[0].בעקבות_לוחמי_תשח;
	var fopt4=document.forms[0].צפרות_ומורשת;
	if(dopt2.checked==true) dt.value=parseInt(dt.value)+parseInt(dopt2.value);
	if(dopt3.checked==true) dt.value=parseInt(dt.value)+parseInt(dopt3.value);
	for(i=0;i<fopt1.length;i++) {
		if(fopt1[i].checked) dt.value=parseInt(dt.value)+parseInt(fopt1[i].value);
	}
	for(i=0;i<fopt4.length;i++) {
		if(fopt4[i].checked) dt.value=parseInt(dt.value)+parseInt(fopt4[i].value);
	}

	var time=dt.value;
	dt.value=(Math.ceil(dt.value/60)-1)+":"+dt.value%60;
	if(time>240) {
		alert("שים/י לב!\nבחרת פעילויות המסתכמות ביותר מארבע שעות. \t \nבדרך כלל פעילויות האורכות יותר מארבע שעות אינן\nמתאימות לתלמידי בית ספר יסודי.");
		document.getElementById("alert").className="outl";
	} else document.getElementById("alert").className="nop";
}
// "a % b" means the remainder if you divide "a" by "b". For example, "14 % 5" is 4 (since 14 = 5 * 2 + 4)
// Math.ceil rounds the number UP to the next integer (so that Mathc.ceil(2.01) equals 3)

function calc2() {
	var dttl=document.forms.f1.total; dttl.value=90;
	if(document.forms.f1.tekes.checked==true) dttl.value=105;
	if(document.forms.f1.siyur2.checked==true) dttl.value=parseInt(dttl.value)+parseInt(30);

	var fopt1=document.forms.f1.המאבק_על_הדרך_לירושלים;
	var fopt2=document.forms.f1.בעקבות_ההתיישבות;
	var fopt3=document.forms.f1.עמק_איילון_בתקופת_המקרא;
	var fopt4=document.forms.f1.opt4;

	for(i=0;i<fopt1.length;i++) {
		if(fopt1[i].checked) {dttl.value=parseInt(dttl.value)+parseInt(fopt1[i].value); var a=fopt1[i].value;}
	 }
	for(i=0;i<fopt2.length;i++) {
		if(fopt2[i].checked) {dttl.value=parseInt(dttl.value)+parseInt(fopt2[i].value); var b=fopt1[i].value;}
	 }
	for(i=0;i<fopt3.length;i++) {
		if(fopt3[i].checked) {dttl.value=parseInt(dttl.value)+parseInt(fopt3[i].value); var c=fopt1[i].value;}
	 }
	if(fopt4.checked==true) dttl.value=parseInt(dttl.value)+parseInt(fopt4.value);

	var time=dttl.value;
	dttl.value=(Math.ceil(dttl.value/60)-1)+":"+dttl.value%60;

	var d=document.getElementById("alert");
	var msgs=new Array();
	var msg=new Array();

	if(time>480) msgs[1]=1;

//	a = המאבק_על_הדרך_לירושלים;
//	b = בעקבות_ההתיישבות;
//	c = עמק_איילון_בתקופת_המקרא;
	var tmp=0;
	if(a>0 && b>0) tmp=1;
	if(a>0 && c>0) tmp=1;
	if(b>0 && c>0) tmp=2;
	if(tmp>0) msgs[2]=1;
	if(tmp==2) msgs[3]=1;

	msg[1] = "<p>בחרת פעילויות המסתכמות ביותר משמונה שעות. &nbsp;מומלץ לשקול לקיים את הפעילות כפעילות רב יומית הכוללת לינה באתר.</p>";
	msg[2] = "<p>בחרתם לקיים יותר מסיור אחד. &nbsp;ככלל, לא מומלץ / לא ניתן לקיים יותר מסיור אחד ביום. &nbsp;מומלץ לשקול לקיים את הפעילות כפעילות רב יומית הכוללת לינה באתר.</p>";
	msg[3] = "<p>בחרתם לקיים את הסיור \"בעקבות ההתיישבות\" וגם את \"עמק איילון בתקופת המקרא\". &nbsp;מאחר ושני סיורים אלה עוברים באותם אזורים, לא מומלץ לקיימם באותו ביקור.</p>";

	d.innerHTML="<p><b>שים/י לב!</b></p>";
	for(i=1;i<4;i++) {
		if(msgs[i]==1) d.innerHTML+=msg[i];
	}
	if(msgs.length>1) d.style.display="block"; else d.style.display="none";
}

function calc3() {
	var dttl=document.forms.f1.total; dttl.value=90;
	if(document.forms.f1.tekes.checked==true) dttl.value=105;
	if(document.forms.f1.siyur2.checked==true) dttl.value=parseInt(dttl.value)+parseInt(30);

	var fopt1=document.forms.f1.המאבק_על_הדרך_לירושלים;
	var fopt2=document.forms.f1.בעקבות_לוחמים;
	var fopt3=document.forms.f1.בעקבות_ההתיישבות;
	var fopt4=document.forms.f1.ארכיאולוגיה_טבע_ואתגר;
	var fopt5=document.forms.f1.הרצאה;

	for(i=0;i<fopt1.length;i++) {
		if(fopt1[i].checked) {dttl.value=parseInt(dttl.value)+parseInt(fopt1[i].value); var a=fopt1[i].value;}
	 }
	for(i=0;i<fopt2.length;i++) {
		if(fopt2[i].checked) {dttl.value=parseInt(dttl.value)+parseInt(fopt2[i].value); var b=fopt2[i].value;}
	 }
	for(i=0;i<fopt3.length;i++) {
		if(fopt3[i].checked) {dttl.value=parseInt(dttl.value)+parseInt(fopt3[i].value); var c=fopt3[i].value;}
	 }
	for(i=0;i<fopt4.length;i++) {
		if(fopt4[i].checked) {dttl.value=parseInt(dttl.value)+parseInt(fopt4[i].value); var d=fopt4[i].value;}
	 }
	if(fopt5.checked==true) dttl.value=parseInt(dttl.value)+parseInt(fopt5.value);

	var time=dttl.value;
	dttl.value=(Math.ceil(dttl.value/60)-1)+":"+dttl.value%60;

	var d=document.getElementById("alert");
	var msgs=new Array();
	var msg=new Array();

	if(time>480) msgs[1]=1;

//	a = המאבק_על_הדרך_לירושלים;
//	b = בעקבות_לוחמים;
//	c = בעקבות_ההתיישבות;
	var tmp=0;
	if(a>0 && b>0) tmp=1;
	if(a>0 && c>0) tmp=1;
	if(b>0 && c>0) tmp=1;
	if(tmp>0) msgs[2]=1;

	msg[1] = "<p>בחרת פעילויות המסתכמות ביותר משמונה שעות. &nbsp;מומלץ לשקול לקיים את הפעילות כפעילות רב יומית הכוללת לינה באתר.</p>";
	msg[2] = "<p>בחרתם לקיים יותר מסיור אחד. &nbsp;ככלל, לא מומלץ / לא ניתן לקיים יותר מסיור אחד ביום. &nbsp;מומלץ לשקול לקיים את הפעילות כפעילות רב יומית הכוללת לינה באתר.</p>";

	d.innerHTML="<p><b>שים/י לב!</b></p>";
	for(i=1;i<3;i++) {
		if(msgs[i]==1) d.innerHTML+=msg[i];
	}
	if(msgs.length>1) d.style.display="block"; else d.style.display="none";
}

function addit(x) {
	var qs="";
	var tmp=document.getElementsByTagName("input");
	for(i=0;i<tmp.length;i++) {
//		alert(tmp[i].id+"="+tmp[i].type);
		if(tmp[i].type!="button") {
//			alert(tmp[i].id+"="+tmp[i].type);
			if(tmp[i].checked==true) if(tmp[i].value!=0) qs=qs+"&"+tmp[i].name+"="+tmp[i].value;
		 	if(tmp[i].type=="text") qs=qs+"&"+tmp[i].name+"="+tmp[i].value; // text */
		}
	} // end for
	if(x==1) qs=qs+"&order=יסודי"; else if(x==2) qs=qs+"&order=חטיבה"; else qs=qs+"&order=תיכון"
	location.href="undefined.htm?"+qs;
}