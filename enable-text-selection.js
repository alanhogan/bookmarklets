// Note: Should be coverted to a bookmarklet with http://ted.mielczarek.org/code/mozilla/bookmarklet.html
// because it properly ignores comments, unlike http://mrcoles.com/bookmarklet/

(function(){

function allowTextSelection() {
  var styles='*,p,div{user-select:text !important;-moz-user-select:text !important;-webkit-user-select:text !important;}';
  jQuery('head').append(jQuery('<style />').html(styles));
  
  window.console && console.log('allowTextSelection');
  
  var allowNormal = function(){
    return true;
  };
  
  window.console && console.log('Elements unbound: '+
    jQuery('*[onselectstart], *[ondragstart], *[oncontextmenu], #songLyricsDiv'
    ).unbind('contextmenu').unbind('selectstart').unbind('dragstart'
    ).unbind('mousedown').unbind('mouseup').unbind('click'
    ).attr('onselectstart',allowNormal).attr('oncontextmenu',allowNormal
    ).attr('ondragstart',allowNormal).size());
}

function allowTextSelectionWhenPossible() {
  window.console && console.log('allowTextSelectionWhenPossible');
  if (window.jQuery) {
    window.console && console.log('jQuery has now loaded');
    allowTextSelection();
  } else {
    window.console && console.log('jQuery still not loaded.');
    window.setTimeout(allowTextSelectionWhenPossible, 100);
  }
}

if (window.jQuery) {
    window.console && console.log('jQuery exists; will use');
  allowTextSelection();
} else {
  window.console && console.log('jQuery not loaded; will include.');
  var s = document.createElement('script');
  s.setAttribute('src', 
    // Hard to read, but the intention here is to set a protocol
    // ONLY IF we are *not* running on HTTP or HTTPS already.
    // That is to allow the script to work on e.g. file:/ URLs,
    // but using the protocol-agnosting `//tld/file` format which allows
    // the bookmarklet to run on HTTP & HTTPS pages, both. Should fix issue #2.
    (document.location.toString().substr(0,4) === 'http' ? '' : 'http:') + '//code.jquery.com/jquery-1.9.1.min.js'
  );
  document.getElementsByTagName('body')[0].appendChild(s);
  allowTextSelectionWhenPossible();
}


})();
