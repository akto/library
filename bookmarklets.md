#Bookmarklets
##Just copy and paste to your links location

***

###Accessibility

- **Google Search Bookmarklet**: javascript:var q=document.getSelection();if(q==false){q=prompt('kelime gir');};iNewWin=window.open('');iNewWin.document.write('<script language=\'javascript\' type=\'text/javascript\'>location.href=\'http://www.google.com/#hl=en&q='+encodeURIComponent(q)+'\';</script>');

- **Bing Search Bookmarklet**: javascript:var q=document.getSelection();if(q==false){q=prompt('kelime gir');};iNewWin=window.open('');iNewWin.document.write('<script language=\'javascript\' type=\'text/javascript\'>location.href=\'http://www.bing.com/search?q='+encodeURIComponent(q)+'\';</script>');

- **Youtube Search Bookmarklet**: javascript:var q=document.getSelection();if(q==false){q=prompt('kelime gir');};iNewWin=window.open('');iNewWin.document.write('<script language=\'javascript\' type=\'text/javascript\'>location.href=\'http://www.youtube.com/results?search_query='+encodeURIComponent(q)+'\';</script>');

- **List all links in a webpage**: javascript:function getlink(){ var d = document; var lenlink = d.links.length; var linkArr = []; var linkText = []; for(var i = 0; i<lenlink;i++){ linkArr[i] = d.links[i].href; linkText[i] = d.links[i].text; } var htmlTable = lenlink+'<table border=\'1\'>'; for(var k = 0;k<lenlink;k++){ htmlTable += '<tr><td>'; htmlTable += k; htmlTable += '</td><td>'; htmlTable += linkText[k]; htmlTable += '</td><td>'; htmlTable += linkArr[k]; htmlTable += '</td></tr>'; } htmlTable += '</table>'; document.write(htmlTable); } getlink(); void(0);
