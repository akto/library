# Bookmarklets
## Just copy and paste to your links location

***

### Accessibility

- **Wikipedia Links to Wikizeroo**:

  ```javascript:for(let i = 0 ; i < document.links.length; i++ ){ if( document.links[i].host.search('wikipedia') != -1 ){ let d = document.links[i].href.replace('wikipedia','0wikipedia'); document.links[i].href = d ; }; }```

- **Google Search Bookmarklet**: 

  ```javascript:var q=document.getSelection(),input=q.toString();if(input == false){ input = prompt("Enter Your Search Query:  ");}; if(input == null){ input='random number between 1 and 6'};window.open("https://www.google.com/search?q="+encodeURIComponent(input))```

- **Bing Search Bookmarklet**: 

  ```javascript:var q=document.getSelection();if(q==false){q=prompt('kelime gir');};iNewWin=window.open('');iNewWin.document.write('<script language=\'javascript\' type=\'text/javascript\'>location.href=\'http://www.bing.com/search?q='+encodeURIComponent(q)+'\';</script>');```

- **Youtube Search Bookmarklet**: 

  ```javascript:var q=document.getSelection();if(q==false){q=prompt('kelime gir');};iNewWin=window.open('');iNewWin.document.write('<script language=\'javascript\' type=\'text/javascript\'>location.href=\'http://www.youtube.com/results?search_query='+encodeURIComponent(q)+'\';</script>');```

- **List all links in a webpage**: 

  ```javascript:function getlink(){ var d = document; var lenlink = d.links.length; var linkArr = []; var linkText = []; for(var i = 0; i<lenlink;i++){ linkArr[i] = d.links[i].href; linkText[i] = d.links[i].text; } var htmlTable = lenlink+'<table border=\'1\'>'; for(var k = 0;k<lenlink;k++){ htmlTable += '<tr><td>'; htmlTable += k; htmlTable += '</td><td>'; htmlTable += linkText[k]; htmlTable += '</td><td>'; htmlTable += linkArr[k]; htmlTable += '</td></tr>'; } htmlTable += '</table>'; document.write(htmlTable); } getlink(); void(0);```

- **List all images in a webpage**: 

  ```javascript:function getlink(){ var d = document; var img = d.getElementsByTagName('img'); var imgLen = img.length; var imgArr = []; var imgText = []; for(var i = 0; i<imgLen;i++){ if(img[i].className=='logo' || img[i].id =='logo'){ imgArr[i] = img[i].src; break; } else{ imgArr[i] = img[i].src; } } var htmlTable = imgLen+'<table border=\'1\'>'; for(var k = 0;k<imgLen;k++){ htmlTable += '<tr><td>'; htmlTable += k; htmlTable += '</td><td>'; htmlTable += "<img src=\'"; htmlTable += imgArr[k]; htmlTable += '\'/>'; htmlTable += '</td><td>'; htmlTable += imgArr[k]; htmlTable += '</td></tr>'; } htmlTable += '</table>'; document.write(htmlTable); } getlink(); void(0);```
