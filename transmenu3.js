
if (TransMenu.isSupported()) {
 // by Yaron to allow for consistent relative positioning of menu across different resolutions
	var top=100;
	var widths = new Array(640,720,800,848,1024,1152,1280,1360,1440,1600);
	var topa = new Array(68,77,85,90,111,125,139,147,156,173);	
	for (var loop=0; loop<widths.length; loop++) {if (screen.width==widths[loop]) var top=topa[loop];}

	var ms = new TransMenuSet(TransMenu.direction.down, top, 55, TransMenu.reference.bottomLeft); //top
	var menu1 = ms.addMenu(document.getElementById("tafrit"));
	menu1.addItem("���� �����");
	menu1.addItem("��� ���� ���&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	menu1.addItem("���� ����...","javascript:printit()"); //07
	menu1.addItem("���� / �����", "about.htm");

	var submenu0 = menu1.addMenu(menu1.items[0]);
	submenu0.addItem("������ �����", "javascript:pass('index2.htm')");		// 0
	submenu0.addItem("��� �� ������ ������?&nbsp;&nbsp;&nbsp;", "javascript:pass('why.htm')");
	submenu0.addItem("���� �������", "javascript:pass('gisha.htm')"); 			
	submenu0.addItem("������ ��� ���", "javascript:pass('byage.htm')");		//3 byage
	submenu0.addItem("���� �������� ����", "javascript:pass('siyur0.htm')"); 		//4 siyur
	submenu0.addItem("�������� ������", "javascript:pass('xtras.htm')"); 		//5 extra  
	submenu0.addItem("��� ������", "javascript:pass('ech.htm')");
	submenu0.addItem("����� ���", "javascript:pass('contact.htm')");
	submenu0.addItem("���� �����", "javascript:pass('undefined.htm')");

		var submenu00 = submenu0.addMenu(submenu0.items[3]);
		submenu00.addItem("������ ����", "javascript:pass('hadracha.htm')");
		submenu00.addItem("���� ��� �������&nbsp;&nbsp;&nbsp;&nbsp;", "javascript:pass('yesodi.htm')");
		submenu00.addItem("������� ������", "javascript:pass('benayim.htm')");
		submenu00.addItem("��������", "javascript:pass('tichon.htm')");

		var submenu01 = submenu0.addMenu(submenu0.items[4]);
		submenu01.addItem("���� �������� ����&nbsp;&nbsp;&nbsp;&nbsp;", "javascript:pass('siyur0.htm')");
		submenu01.addItem("����� ����", "musa.htm");
		submenu01.addItem("������� ������", "javascript:pass('tanks.htm')");
		submenu01.addItem("����� �������", "javascript:pass('zikaron.htm')");
		submenu01.addItem("���� ������", "javascript:pass('meizag.htm')");
		submenu01.addItem("�������", "javascript:pass('taruhot.htm')");
		submenu01.addItem("�����", "javascript:pass('nofim.htm')");
		
		var submenu02 = submenu0.addMenu(submenu0.items[5]);
		submenu02.addItem("���� ��� ���","javascript:pass('tkasim.htm')");
		submenu02.addItem("��\"� ��\"� �����", "javascript:pass('shelach.htm')"); // 1 shelach
		submenu02.addItem("������ ����", "javascript:pass('tnuot.htm')");
		submenu02.addItem("��������� ���", "javascript:pass('segel.htm')");
		submenu02.addItem("���� �������� �������&nbsp;&nbsp;&nbsp;&nbsp;", "javascript:pass('marmad.htm')");
		submenu02.addItem("���� �������", "manhigut.htm");

	var submenu1 = menu1.addMenu(menu1.items[1]);
	submenu1.addItem("75%", "javascript:zum(.75)");
	submenu1.addItem("100%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "javascript:zum(1)");
	submenu1.addItem("125%", "javascript:zum(1.25)");
	submenu1.addItem("150%", "javascript:zum(1.5)");
	submenu1.addItem("200%", "javascript:zum(2)");

	TransMenu.renderAll();
}
