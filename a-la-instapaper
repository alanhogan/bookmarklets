(function() {
    var i, x;
    for (i = 0; x = document.styleSheets[i]; ++i) x.disabled = true;
    var newSS, styles = 'body { max-width: 25em !important; overflow: wrap; margin-left: auto; margin-right: auto; line-height: 1.4em;  } * { background: white ! important; color: black !important; font-face: Georgia !important; } :link, :link * { color: #0011aa !important } :visited, :visited * { color: #440590 !important; } pre, code, key, .code { font-family: monospace !important;}        ';
    if (document.createStyleSheet) {
        document.createStyleSheet("javascript:'" + styles + "'");
    } else {
        newSS = document.createElement('link');
        newSS.rel = 'stylesheet';
        newSS.href = 'data:text/css,' + escape(styles);
        document.getElementsByTagName("head")[0].appendChild(newSS);
    }
})();
