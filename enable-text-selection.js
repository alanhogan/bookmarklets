(function(){

function allowTextSelection(){
  var styles='*,p,div{user-select:text !important;-moz-user-select:text !important;-webkit-user-select:text !important;}';
  jQuery('head').append(jQuery('<style />').html(styles));
  
  window.console&&console.log('allowTextSelection');
  var allowNormal = function(){
    return true;
  };
  window.console&&console.log('Elements unbound: '+
    jQuery('*[onselectstart], *[ondragstart], *[oncontextmenu], #songLyricsDiv'
    ).unbind('contextmenu').unbind('selectstart').unbind('dragstart'
    ).unbind('mousedown').unbind('mouseup').unbind('click'
    ).attr('onselectstart',allowNormal).attr('oncontextmenu',allowNormal
    ).attr('ondragstart',allowNormal).size());
}

function allowTextSelectionWhenPossible() {
  window.console&&console.log('allowTextSelectionWhenPossible');
  if(window.jQuery){
    window.console&&console.log('jQuery has now loaded');
    allowTextSelection();
  } else {
    window.console&&console.log('jQuery still not loaded.');
    window.setTimeout(allowTextSelectionWhenPossible, 100);
  }
}

if(window.jQuery) {
    window.console&&console.log('jQuery exists; will use');
  allowTextSelection();
}else{
  window.console&&console.log('jQuery not loaded; will include.');
  var s=document.createElement('script');
  s.setAttribute('src','http://code.jquery.com/jquery-1.9.1.min.js');
  document.getElementsByTagName('body')[0].appendChild(s);
  allowTextSelectionWhenPossible();
}


})();
