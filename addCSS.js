/* This should probably have ES6 to ES5 transpilation on when compiling to bookmarklet */

const version = '1.0';

const styles = prompt('Enter CSS here to add it to the current page.');

const styleElement = (document.getElementsByTagName('head')[0]||document.body).appendChild(document.createElement('style'));
const textNode = document.createTextNode(styles);
styleElement.appendChild(textNode);
