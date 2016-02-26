
if (TransMenu.isSupported()) {
 // by Yaron to allow for consistent relative positioning of menu across different resolutions
	var top=100;
	var widths = new Array(640,720,800,848,1024,1152,1280,1360,1440,1600);
	var topa = new Array(68,77,85,90,111,125,139,147,156,173);	
	for (var loop=0; loop<widths.length; loop++) {if (screen.width==widths[loop]) var top=topa[loop];}

	var ms = new TransMenuSet(TransMenu.direction.down, top, 55, TransMenu.reference.bottomLeft); //top
	var menu1 = ms.addMenu(document.getElementById("tafrit"));
	menu1.addItem("עבור לעמוד");
	menu1.addItem("שנה גודל כתב&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	menu1.addItem("הדפס עמוד...","javascript:printit()"); //07
	menu1.addItem("עזרה / אודות", "about.htm");

	var submenu0 = menu1.addMenu(menu1.items[0]);
	submenu0.addItem("ברוכים הבאים", "javascript:pass('index2.htm')");		// 0
	submenu0.addItem("למה יד לשריון בלטרון?&nbsp;&nbsp;&nbsp;", "javascript:pass('why.htm')");
	submenu0.addItem("גישה חינוכית", "javascript:pass('gisha.htm')"); 			
	submenu0.addItem("פעילות לפי גיל", "javascript:pass('byage.htm')");		//3 byage
	submenu0.addItem("סיור וירטואלי באתר", "javascript:pass('siyur0.htm')"); 		//4 siyur
	submenu0.addItem("פעילויות נוספות", "javascript:pass('xtras.htm')"); 		//5 extra  
	submenu0.addItem("איך מגיעים", "javascript:pass('ech.htm')");
	submenu0.addItem("יצירת קשר", "javascript:pass('contact.htm')");
	submenu0.addItem("טופס הזמנה", "javascript:pass('undefined.htm')");

		var submenu00 = submenu0.addMenu(submenu0.items[3]);
		submenu00.addItem("ההדרכה באתר", "javascript:pass('hadracha.htm')");
		submenu00.addItem("לבתי ספר יסודיים&nbsp;&nbsp;&nbsp;&nbsp;", "javascript:pass('yesodi.htm')");
		submenu00.addItem("לחטיבות ביניים", "javascript:pass('benayim.htm')");
		submenu00.addItem("לתיכונים", "javascript:pass('tichon.htm')");

		var submenu01 = submenu0.addMenu(submenu0.items[4]);
		submenu01.addItem("סיור וירטואלי באתר&nbsp;&nbsp;&nbsp;&nbsp;", "javascript:pass('siyur0.htm')");
		submenu01.addItem("תצפית מוסא", "musa.htm");
		submenu01.addItem("מוזיאון הטנקים", "javascript:pass('tanks.htm')");
		submenu01.addItem("מכלול הזיכרון", "javascript:pass('zikaron.htm')");
		submenu01.addItem("מיצג השריון", "javascript:pass('meizag.htm')");
		submenu01.addItem("תערוכות", "javascript:pass('taruhot.htm')");
		submenu01.addItem("נופים", "javascript:pass('nofim.htm')");
		
		var submenu02 = submenu0.addMenu(submenu0.items[5]);
		submenu02.addItem("טקסי בתי ספר","javascript:pass('tkasim.htm')");
		submenu02.addItem("מה\"ד של\"ח לטרון", "javascript:pass('shelach.htm')"); // 1 shelach
		submenu02.addItem("תנועות נוער", "javascript:pass('tnuot.htm')");
		submenu02.addItem("השתלמויות סגל", "javascript:pass('segel.htm')");
		submenu02.addItem("סיוע לתלמידים בעבודות&nbsp;&nbsp;&nbsp;&nbsp;", "javascript:pass('marmad.htm')");
		submenu02.addItem("קורס מנהיגות", "manhigut.htm");

	var submenu1 = menu1.addMenu(menu1.items[1]);
	submenu1.addItem("75%", "javascript:zum(.75)");
	submenu1.addItem("100%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "javascript:zum(1)");
	submenu1.addItem("125%", "javascript:zum(1.25)");
	submenu1.addItem("150%", "javascript:zum(1.5)");
	submenu1.addItem("200%", "javascript:zum(2)");

	TransMenu.renderAll();
}
