// Note: Should be coverted to a bookmarklet with http://ted.mielczarek.org/code/mozilla/bookmarklet.html
// because it properly ignores comments, unlike http://mrcoles.com/bookmarklet/

(function () {

    function allowTextSelection() {
        window.console && console.log('allowTextSelection');

        //add styles that enable text selection
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML =
            '*,p,div{user-select:text !important;-moz-user-select:text !important;-webkit-user-select:text !important;}';

        document.head.appendChild(style);

        //Put all of <body> children in a collection
        //Use getElementsByTagName because it has better compatibility (it's older) than querySelectorAll('*')
        var elArray = document.body.getElementsByTagName('*');

        //allow mouse events typically involved in selection
        for(var i=0; i<elArray.length; i++){
            var el = elArray[i];
            el.onselectstart = el.ondragstart = el.ondrag = el.oncontextmenu = el.onmousedown
                = el.onmouseup = function(){return true};
            
            if(el instanceof HTMLInputElement && el.type == 'text'){
                //enable text inputs (to defeat an easy way to block selection by setting input's 'disabled' attribute)
                el.removeAttribute('disabled');
                
                //counteract any listener that would block copy&paste keyboard shortcuts. (I can't figure out yet why
                // although this works on the first text input to replace an existing issue, it doesn't work on the 2nd
                el.onkeydown = el.onkeyup = function(){return true};
            }
        }       

    }

    allowTextSelection();

})();
