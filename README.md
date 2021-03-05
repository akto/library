# My code library
## Google veya herhangi bir sitedeki Wikipedia linklerini Wikizero Linklerine Çeviren Bookmarklet 
## (en. Wikipedia to Wikizero Link Modifier Bookmarklet)
- Google veya herhangi bir sayfadaki tüm wikipedia linklerini wikizero linklerine dönüştüren bookmarklet'i kullanabilmek için;
 
- Veya aşağıdaki kodu, sık kullanılanlarda yeni bir link oluşturup adres kısmına yapıştırın.
- `javascript:for(let i = 0 ; i < document.links.length; i++ ){ if( document.links[i].host.search('wikipedia') != -1 ){ let d = document.links[i].href.replace('wikipedia','0wikipedia'); document.links[i].href = d ; }; }`

## My code bits and pieces

### Python Codes

- My basic [`math library`](https://github.com/akto/library/blob/master/python/math-lib.py)

### Javascript Codes

- A js library to keep a track of my mostly used code pieces [`mostly-used.js`](https://github.com/akto/library/blob/master/js/mostly-used.js)
- A js [`dice code`](https://github.com/akto/library/blob/master/js/dice.js)
- Palindromes [`palindromes.js`](https://github.com/akto/library/blob/master/js/palindromes.js)
- Pomodoro [`pomodoro.js`](https://github.com/akto/library/blob/master/js/pomodoro.js)

### Bookmarklets

- My [`bookmark library`](https://github.com/akto/library/blob/master/bookmarklets.md)

