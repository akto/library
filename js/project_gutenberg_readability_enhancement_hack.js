/* 
  A script to inject some css hacks to make gutenberg.org books more readable in
html format. I use tempermonkey to inject this code but anyone can use it in developer 
tools console. Just copy and paste and hit ctrl+enter.
*/

/*
Tempermonkey setup

// ==UserScript==
// @name         Gutenberg Page Width
// @namespace    http://tampermonkey.net/
// @version      2025-09-20
// @description  try to take over the world!
// @author       Egemen AKTO
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @match        https://www.gutenberg.org/*
// @run-at       context-menu
// ==/UserScript==

*/


(function() {
    'use strict';
    const family = 'Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap';
    const href = `https://fonts.googleapis.com/css2?family=${family}`;
    const d = document,
        head = d.head || document.getElementsByTagName('head')[0];
    
    // avoid double injection
    if (document.querySelector(`link[href="${href}"]`)) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    head.appendChild(link);

    const style = document.createElement('style');
    style.textContent = `
      body {
          font-family: "Inter", sans-serif;
          font-weight: 400;
          font-size: clamp(16px, 1vw + 14px, 19px);
          line-height: 1.6;
          letter-spacing: 0.02em;
          text-align: left;
          color: #1a1a1a;
          background: #fff;
          width: 65ch;
          margin-inline: auto; 
          padding-inline: 1rem; 
      }
      a{color:inherit;text-decoration:underline;text-underline-offset:0.15em}
      a:hover{text-decoration-thickness: from-font}
      h1,h2,h3 { line-height: 1.25 !important; margin: 1.2em 0 .5em !important; }
      h1{font-size:clamp(1.8rem,2.5vw,2.4rem) !important}
      h2{font-size:clamp(1.4rem,1.8vw,1.8rem) !important}
      h3{font-size:clamp(1.2rem,1.4vw,1.4rem) !important}
    `;
    head.appendChild(style);
})();
