function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function flvFTSS4(){//v1.04
this.style.filter="";}

function flvFTSS3(){//v1.04
var v1=arguments,v2=v1[0],v3=MM_findObj(v2);if (v3&&v3.TSS1!=null){clearTimeout(v3.TSS1);}}

function flvFTSS2(){//v1.04
var v1=arguments,v2=v1[0],v3=MM_findObj(v2),v4=v1[1],v5=v1[2],v6,v7,v8,v9,v10,v11,v12=document;if (v3&&v3.TSS6){flvFTSS3(v2);v9="flvFTSS2('"+v2+"',"+v4+","+v5+")";if (v4==1){if (!v3.TSS4.complete){v3.TSS1=setTimeout(v9,50);return;}v6=v3.TSS8+1;if (v6>v3.TSS6.length-1){if (v3.TSS9==0){return;}else {v6=0;}}else if (v6<v3.TSS6.length-1){v3.TSS4=new Image();v3.TSS4.src=v3.TSS6[v6+1][0];}}else {if (!v3.TSS2.complete){v3.TSS1=setTimeout(v9,50);return;}v6=v3.TSS8-1;if (v6<0){if (v3.TSS9==0){return;}else {v6=v3.TSS6.length-1;}}else if (v6>0){v3.TSS2=new Image();v3.TSS2.src=v3.TSS6[v6-1][0];}}v10=v3.TSS6[v6][0];v11=v3.TSS6[v6][1];v7=(v3.filters&&!v12.TSS5&&v11<25);if (v7){if (v3.filters[0]&&v3.filters[0].status==2){v3.filters[0].Stop();}if (v11==0){v8="blendTrans(Duration="+v3.TSS7+")";}else {v8="revealTrans(Duration="+v3.TSS7+",Transition="+(v11-1)+")";}v3.style.filter=v8;v3.onfilterchange=flvFTSS4;v3.filters[0].Apply();}v3.src=v10;if (v7){v3.filters[0].Play();}v3.TSS8=v6;if (v5==1){v3.TSS1=setTimeout(v9,v3.TSS3);}}}

function flvFTSS1(){//v1.04
// Copyright 2003, Marja Ribbers-de Vroed, FlevOOware (www.flevooware.nl/dreamweaver/)
var v1=arguments,v2=document,v3=v1[0],v4=MM_findObj(v3),v5,v6;if (v4){v2.TSS5=(navigator.userAgent.toLowerCase().indexOf("mac")!=-1);v4.TSS7=v1[1]/1000;v4.TSS3=v1[2]+v1[1];v6=v1[3];v4.TSS9=v1[4];v4.TSS6=new Array();for (var v7=5;v7<v1.length;v7+=2){v4.TSS6[v4.TSS6.length]=new Array(v1[v7],v1[v7+1]);}v4.TSS8=0;v4.TSS4=new Image();v4.TSS4.src=v1[7];v4.TSS2=new Image();v4.TSS2.src=v1[v1.length-2];if (v6==1){v5="flvFTSS2('"+v3+"',1,"+v6+")";v4.TSS1=setTimeout(v5,v4.TSS3);}}}
