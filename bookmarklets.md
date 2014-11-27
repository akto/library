#Bookmarklets
##Just copy and paste to your links location

###Accessibility

-**Google Search Bookmarklet**: javascript:var q=document.getSelection();if(q==false){q=prompt('kelime gir');};iNewWin=window.open('');iNewWin.document.write('<script language=\'javascript\' type=\'text/javascript\'>location.href=\'http://www.google.com/#hl=en&q='+encodeURIComponent(q)+'\';</script>');