var version = '1.0';
var name = 'com.alanhogan.bookmarklets.mark-visited.' + version;

var extant = document.querySelector('style[data-via-bookmarklet="'+name+'"]');

if (extant !== null) {
	console.log(`Bookmarklet (${name}): Already ran on page`);
}

var css = `
a:link {
  color: rgb(5%, 35%, 90%) !important;
  text-shadow: 0 0.06em 0.3em rgba(100%, 100%, 100%, 1),
    -1px 1px 1px rgba(100%, 100%, 100%, 1),
    1px 1px 1px rgba(104%, 100%, 100%, 1),
    -1px -1px 1px rgba(100%, 100%, 100%, 1), 
    1px -1px 1px rgba(100%, 100%, 100%, 1)  !important;
}
a:visited {
  color: rgb(70%, 2%, 69%) !important;
}
`;

var styleElem = document.createElement('style');
styleElem.setAttribute('data-via-bookmarklet', name);
styleElem.innerHTML = css;

document.head.appendChild(styleElem);
