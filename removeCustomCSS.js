/* This should probably have ES6 to ES5 transpilation on when compiling to bookmarklet */

/* Suggested bookmarklet names: "–CSS" or "Clear Custom Stylesheets" */

const version = '1.0';


const customStylesheets = document.querySelectorAll('style[data-ah-bookmarklet-inserted]');
if (customStylesheets.length < 1) {
  alert("No custom stylesheets inserted with the corresponding bookmarklet can been found. https://alanhogan.com/bookmarklets");
}
customStylesheets.forEach((stylesheet) => {
  stylesheet.parentElement.removeChild(stylesheet);
});
