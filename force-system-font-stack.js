/* This should probably have ES6 to ES5 transpilation on when compiling to bookmarklet */

const version = '1.1';

const styles = `
html, body, p, li, a, input, textarea, button, *:not([class*="icon"] ) {
  font-family: system-ui !important; 
}
`;

const newSS = document.createElement('link');
newSS.rel = 'stylesheet';
newSS.href = 'data:text/css,' + escape(styles);
document.getElementsByTagName("head")[0].appendChild(newSS);
