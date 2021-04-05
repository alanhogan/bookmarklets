/**
 * Adds CSS rules to undo user-select:none. Also cycles through every child of <body> and binds events associated
 * with text selection to a benign function.  Finally, remove 'disabled' attributes from all text inputs and
 * ensures that keydown and keyup events are allowed (to defeat blocks that prevent cut,copy, paste using shortcuts
 * There is one concern though: binding to so many events will undoubtedly break functionality on some pages. For
 * instance, text inputs very often have custom events bound to keypresses (eg to run a search and show results as
 * the user types).  As a result, this script is probably not fit to run indiscriminately on all pages; it should
 * rather be used only when the user needs to defeat text-selection blocks on specific pages.
 *
 * Crunch at https://alanhogan.github.io/bookmarkleter/
 */

function allowTextSelection() {
  window.console && console.log("allowTextSelection");

  //add styles that enable text selection
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `*, p, div {
    user-select: text !important;
    -moz-user-select: text !important;
    -webkit-user-select:text !important;}
  `;

  document.head.appendChild(style);

  function clear(el) {
    el.onselectstart = el.ondragstart = el.ondrag = el.oncontextmenu = el.onmousedown = el.onmouseup = function () {
      return true;
    };

    //special processing for text-style <input> elements
    if (
      el instanceof HTMLInputElement &&
      ["text", "password", "email", "number", "tel", "url"].indexOf(
        el.type.toLowerCase()
      ) > -1
    ) {
      //enable text inputs (to defeat an easy way to block selection by setting input's 'disabled' attribute)
      el.removeAttribute("disabled");

      //counteract any listener that would block copy&paste keyboard shortcuts. (I can't figure out yet why
      // although this works on the first text input in text-selection-demo.html, it doesn't work on the 2nd
      el.onkeydown = el.onkeyup = function () {
        return true;
      };
    }
  }

  //Put all of <body> children in a collection
  //Use getElementsByTagName because it has better compatibility (it's older) than querySelectorAll('*')
  var elArray = document.body.getElementsByTagName("*");

  //allow mouse events typically involved in selection
  for (var i = 0; i < elArray.length; i++) {
    clear(elArray[i])
  }

  clear(document.body)
  clear(document)

}

allowTextSelection();

