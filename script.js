function getSourceAsDOM(url)
{
	xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET",url,false);
	xmlhttp.send();
	parser=new DOMParser();
	return parser.parseFromString(xmlhttp.responseText,"text/html");	  
}
var upperSide = -1;
//var nextEpisodeSide = -1;
var hyperlink = -1;
var toAppend = "";

for (i of document.getElementsByTagName("a")){
	if (i.innerHTML.includes("wstecz")){
		upperSide = getSourceAsDOM(i.href);
		break;
	}
}
if (upperSide != -1){
	for (i of upperSide.getElementsByTagName("a")){
		if (i.innerHTML.includes("NASTĘPNY")){
			hyperlink = i.href;
			//nextEpisodeSide = getSourceAsDOM(i.href);
			break;
		}
	}
	/*if (nextEpisodeSide != -1){
		alert("flaga1")
		for (i of nextEpisodeSide.getElementsByClassName("odtwarzacz_link")){
			alert(i.innerHTML)
			if (i.innerHTML.includes("oglądaj [FHD + HD + SD]")){
				hyperlink = "/odtwarzacz-"+i.getAttribute("rel")+".html";
				alert("flaga2 "+i.innerHTML+" "+hyperlink);
				break;
			}
		}
	}*/
}
if (hyperlink != -1){
	toAppend = '<a href="'+hyperlink+'">następny ---></a>'
}
else{
	toAppend = "To ostatni odcinek :(";
}
for (i of document.getElementsByTagName("a")){
	if (i.innerHTML.includes("wstecz")){
		i.parentElement.innerHTML += toAppend;
	}
}