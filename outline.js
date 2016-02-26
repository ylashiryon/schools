var x = 0;

function toggle(toggleId, e)	{  // Collapsible Outlines
	if (!e) e = window.event;
	var body = document.getElementById(toggleId);
	 if (!body) return false;
//	var im = toggleId + "_toggle";
	 if(x == 0) {body.style.display = 'block'; x=1;} else if(body.style.display == 'none') body.style.display = 'block'; else body.style.display = 'none';
// Stop the event from propagating, which would cause the regular HREF link to be followed, ruining our hard work.
	if (e) e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
}