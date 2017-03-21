// Detector from http://www.lalit.org/lab/javascript-css-font-detect/
// Other code by Alan Hogan
// http://www.apache.org/licenses/LICENSE-2.0
// Compile this to a bookmarklet at http://bookmarklets.org/maker/
// Some code has been previously converted by the Babel REPL to survive
// running in IE11. Avoid ES6 or transpile before committing updates.

var versionStr = '1.0';

var Detector = function Detector() {
  var baseFonts = ['monospace', 'sans-serif', 'serif'];

  var testString = "mmmmmmmmmmlli";

  var testSize = '72px';

  var h = document.getElementsByTagName("body")[0];

  var s = document.createElement("span");
  s.style.fontSize = testSize;
  s.innerHTML = testString;
  var defaultWidth = {};
  var defaultHeight = {};
  for (var index in baseFonts) {
    s.style.fontFamily = baseFonts[index];
    h.appendChild(s);
    defaultWidth[baseFonts[index]] = s.offsetWidth; 
    defaultHeight[baseFonts[index]] = s.offsetHeight; 
    h.removeChild(s);
  }

  function detect(font) {
    var detected = false;
    for (var index in baseFonts) {
      s.style.fontFamily = '\'' + font + '\', ' + baseFonts[index];
      h.appendChild(s);
      var matched = s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]];
      h.removeChild(s);
      detected = detected || matched;
    }
    return detected;
  }

  this.detect = detect;
};

var d = new Detector();

function guessBodyFont(fullReport) {
  var body = document.getElementsByTagName('body')[0];
  var stack = body ? window.getComputedStyle(body).fontFamily : '';
  var fonts = stack.split(/\s*,\s*/).map(function (font) {
    return font.replace(/^['"]\s*(.+\S)\s*['"]$/, '$1');
  });

  var probableFont = false;
  var availableFonts = [], unavailableFonts = [];
  fonts.forEach(function (font) {
    if (d.detect(font)) {
      probableFont = probableFont || font;
      availableFonts.push(font);
    } else {
       unavailableFonts.push(font);
    }
  });

  if (probableFont) {
    var reportStr = "BODY element is probably using the font family or keyword: \n" + probableFont;
    if (fullReport) {
      reportStr = reportStr + "\n\n" + "All matching font names or keywords in the stack: \n" + availableFonts.join("\n") + "\n\n" + "Unavailable fonts: \n" + (unavailableFonts.length > 0 ? unavailableFonts.join("\n") : '(None)') + "\n\n" + "Font stack as reported by getComputedStyle: \n" + stack;
      reportStr = reportStr + "\n\nOnly Latin characters are tested, so detection will fail for Asian fonts, emojis, and system fonts. ";
    } else {
      reportStr = reportStr + "\n\n"
    }

    reportStr = reportStr + "More info and potentially a newer version of this bookmarklet are available at "
      + "https://alanhogan.com/bookmarklets"
      + (fullReport ? '#font-stack-full' : '#font-stack-guess');
    
    reportStr = reportStr + "\n\This is version " + versionStr;
    
    alert(reportStr);
  } else {
    alert('Did not detect a font set for body');
  }
}

function fullBodyFontStackReport() {
  guessBodyFont(true);
}

// Uncomment ONE of these to generate the simple vs full version of the bookmarklet.
// guessBodyFont();
fullBodyFontStackReport();
