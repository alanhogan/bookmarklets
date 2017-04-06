// crunch at https://alanhogan.github.io/bookmarkleter/

var html = false,
    selection, content, range, div, title;

try {
    if (window.getSelection && (selection = window.getSelection()) && selection.toString().length > 0) {
        range = selection.getRangeAt(0);
        content = range.cloneContents(); // document fragment
        div = document.createElement('div');
        div.appendChild(content.cloneNode(true));
        if (div.innerHTML.length > 0) {
            html = div.innerHTML;
        }
        title = (document.getElementsByTagName('title')[0] || {innerHTML: 'source'}).innerHTML;
    }
} catch (ex) {}

if (html !== false) {
    window.location.href = 'http://heckyesmarkdown.com/go/?read=0&showframe=1&html=' + encodeURIComponent("<p>[" + title.replace(']', '\]') + "](" + document.location.href + ")</p>\n" + html);
} else {
    window.location.href = 'http://heckyesmarkdown.com/go/?read=1&showframe=1&u=' + encodeURIComponent(document.location.href);
}
