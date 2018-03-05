var antiAliasMode = true; // set false to compile the subpixel mode.
var version = '2.0';
var name = 'com.alanhogan.bookmarklets.' + (antiAliasMode ? 'aa' : 'subpixel') + '.' + version;

var extant = document.querySelector('style[data-via-bookmarklet="'+name+'"]');

if (extant !== null) {
	console.log(`Bookmarklet (${name}): Already ran on page`);
}

var css = `
* {
  -webkit-font-smoothing: ${(antiAliasMode ? 'antialiased' : 'auto')} !important;
  -moz-osx-font-smoothing: ${(antiAliasMode ? 'grayscale' : 'auto')} !important;
  font-smoothing: ${(antiAliasMode ? 'antialiased' : 'auto')} !important;
}
`;

var styleElem = document.createElement('style');
styleElem.setAttribute('data-via-bookmarklet', name);
styleElem.innerHTML = css;

document.head.appendChild(styleElem);
