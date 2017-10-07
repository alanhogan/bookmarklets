// Shrink with https://alanhogan.github.io/bookmarkleter/
// Modified from a very old bookmarklet I found a long time ago.
// Finds links to images and videos. Opens a new tab and displays all.
// Not always useful, but sometimes very useful!

function isMediaURL(u) {
    return !!(u.match(/\.(jpe?g|gif|png|webp|mng)/i) || isVideoURL(u));
}

function isVideoURL(u) {
    return !!u.match(/\.(webm|m4v|flv|mp4|avi|qt)/i);
}

function hE(s) {
    return s.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '"');
}

var z = open().document;

z.write('<!DOCTYPE html><html><head><title>Images</title>' +
    '<style type="text/css" />img:not(.fit), video:not(.fit) {cursor: zoom-out;} ' +
    'img.fit, video.fit { max-width: 100%; max-height: 110vh; cursor: zoom-in;}  ' +
    'body {font-family: system-ui, "helvetica neue",arial, helvetica, sans-serif} ' +
    'html, body{min-height: 100%; height: 100%;}</style>' +
    '</head><body>' +
    '<p>Images linked to by ' +
    hE(location.href) +
    ':</p><hr>'
);

var seen = {},
    q, h, i, isVideo;

for (i = 0; q = document.links[i]; ++i) {
    h = q.href;
    if (seen[h]) continue;
    seen[h] = true;
    if (h && isMediaURL(h)) {
        isVideo = isVideoURL(h);
        z.write('<p>' +
            q.innerHTML + ' (' + hE(h) + ')<br>' +
            (isVideo ? '<video controls loop autoplay' : '<img') +
            ' class="fit" onclick="if(this.className==\'fit\'){this.className=\'\';}else{this.className=\'fit\';}"' +
            ' src="' + hE(h) +
            (isVideo ? '" ></video>' : '" />')
        )
    }
}

seen = {};

z.write('</body></html>');
z.close()
