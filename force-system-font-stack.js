/* This should probably have ES6 to ES5 transpilation on when compiling to bookmarklet */

const version = '1.2';

const styles = `
html, body, p, li, a, input, textarea, button, *:not([class*="icon"] ) {
  font-family: system-ui !important; 
}
`;

const styleElement = (document.getElementsByTagName('head')[0]||document.body).appendChild(document.createElement('style'));
const textNode = document.createTextNode(styles);
styleElement.appendChild(textNode);
